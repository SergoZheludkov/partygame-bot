/* eslint-disable camelcase */
import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NoOpQueryService } from '@nestjs-query/core';
import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { UserDto, UserCreateDto } from '../dto';
import { User } from '../user.model';

@Resolver()
export class UserResolver extends NoOpQueryService<User> {
  constructor(
    @InjectModel(User) readonly user: typeof User,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private sequelize: Sequelize,
  ) {
    super();
  }

  getURL(userid: string) {
    return `${this.configService.get('WEBHOOK_HOST_BASE')}/notification/new_referral/${userid}`;
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserCreateDto) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const userResult = await this.user.create(input, { transaction });

        const { who_invite } = input;
        const referral = await this.user.findByPk(who_invite, { transaction });

        if (!who_invite || !referral) return userResult;

        await referral.increment('referral_counter', { transaction });

        const { firstname, lastname } = userResult;
        const data = { firstname, lastname };

        const url = this.getURL(referral.id);
        await this.httpService.post(url, { data }).toPromise();

        return userResult;
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error with create User');
    }
  }
}
