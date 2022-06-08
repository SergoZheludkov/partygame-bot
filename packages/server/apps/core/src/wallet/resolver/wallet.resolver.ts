/* eslint-disable camelcase */
import { IsDefined } from 'class-validator';
import { NoOpQueryService } from '@nestjs-query/core';
import { Args, Resolver, Mutation, Query, InputType, Field } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize, OrderItem } from 'sequelize';
import { WalletDto, WalletCreateDto } from '../dto';
import { Wallet } from '../wallet.model';
import { ReturnStatusType } from '../../types';
import { Status } from '../../reqStatuses';

@InputType('WalletStatus')
export class WalletStatus {
  @Field()
  @IsDefined()
  id: number;

  @Field()
  @IsDefined()
  is_active: boolean;
}

@Resolver()
export class WalletResolver extends NoOpQueryService<Account> {
  constructor(@InjectModel(Wallet) readonly wallet: typeof Wallet, private sequelize: Sequelize) {
    super();
  }

  @Query(() => WalletDto, { name: 'oneWallet' })
  async oneWallet(@Args('type') type: string) {
    try {
      const where = { type, is_active: true };
      const order = [['updated', 'ASC']] as OrderItem[];
      const wallet = await this.wallet.findOne({ where, order });
      return wallet;
    } catch (e) {
      console.error(e);
      throw new Error('Error with One Wallet');
    }
  }

  @Query(() => [WalletDto], { name: 'allWallets' })
  async allWallets() {
    try {
      const order = [['number', 'ASC']] as OrderItem[];
      const wallets = await this.wallet.findAll({ order });
      return wallets;
    } catch (e) {
      console.error(e);
      throw new Error('Error with All Wallets');
    }
  }

  @Mutation(() => ReturnStatusType)
  async addWallets(@Args({ name: 'input', type: () => [WalletCreateDto] }) input: WalletCreateDto[]) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const prices = await this.wallet.bulkCreate(input, { transaction });
        return prices.length ? Status.SUCCESS : Status.FAILED;
      });
    } catch (e) {
      console.error(e);
      return Status.FAILED;
      // throw new Error('Error with add wallets');
    }
  }

  @Mutation(() => ReturnStatusType)
  async switchWalletStatus(@Args({ name: 'id', type: () => Number }) id: number) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const wallet = await this.wallet.findByPk(id, { transaction });
        if (!wallet) return Status.FAILED;
        await wallet.update({ is_active: !wallet.is_active }, { transaction });
        return Status.SUCCESS;
      });
    } catch (e) {
      console.error(e);
      return Status.FAILED;
      // throw new Error('Error with deactivate wallets');
    }
  }
}
