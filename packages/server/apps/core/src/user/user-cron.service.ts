import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { getNumberTime } from '@common_ubot/utilits';
import { User } from './user.model';

const EVERY_30_MINUTES = '0 */30 8-17 * * *';

@Injectable()
export class UserCronService {
  constructor(
    @InjectModel(User) readonly user: typeof User,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getURL(userid: string) {
    return `${this.configService.get('WEBHOOK_HOST_BASE')}/notification/message/${userid}`;
  }

  @Cron(EVERY_30_MINUTES, { timeZone: 'Europe/Moscow' })
  async startReminder() {
    try {
      const reminder_time = getNumberTime();
      const users = await this.user.findAll({ where: { reminder_time }, attributes: ['id'] });
      const data = { message: '' };
      users.forEach(({ id }) => this.httpService.post(this.getURL(id), { data }).toPromise());
    } catch (e) {
      console.error(e);
      throw new Error('Error with User Cron');
    }
  }
}
