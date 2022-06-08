import { getIdFromDate } from '@common_ubot/utilits';
import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { Op, Sequelize } from 'sequelize';
import { startOfYesterday, endOfYesterday } from 'date-fns';

import { User } from '../user/user.model';
import { Payment } from '../payment/payment.model';

import { Statistic } from './statistics.model';
import { getPaymentStatistic, PaymentStatistics } from './helpers';

const EVERY_START_DAY = '10 0 * * *';

@Injectable()
export class StatisticsCronService {
  constructor(
    @InjectModel(User) readonly user: typeof User,
    @InjectModel(Payment) readonly payment: typeof Payment,
    @InjectModel(Statistic) readonly statistic: typeof Statistic,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private sequelize: Sequelize,
  ) {}

  getURL(userid: string) {
    return `${this.configService.get('WEBHOOK_HOST_BASE')}/notification/day_statistics/${userid}`;
  }

  @Cron(EVERY_START_DAY, { timeZone: 'Europe/Moscow' })
  async saveStatistic() {
    const startDate = startOfYesterday();
    const endDate = endOfYesterday();
    const yesterday = { [Op.between]: [startDate, endDate] };
    try {
      return await this.sequelize.transaction(async (transaction) => {
        const { count: totalUsers } = await this.user.findAndCountAll({
          where: { created: yesterday },
          transaction,
        });
        const paymentsData = await this.payment.findAll({
          include: ['wallet'],
          where: { is_paid: true, updated: yesterday },
          transaction,
        });

        const payments = paymentsData.reduce(getPaymentStatistic, {} as PaymentStatistics);

        const statisticsPerDay = {
          id: getIdFromDate(startDate),
          users: totalUsers,
          payments: JSON.stringify(payments),
        } as Statistic;

        await this.statistic.create(statisticsPerDay, { transaction });

        const data = { payments, users: totalUsers };
        const admins = await this.user.findAll({ where: { is_admin: true }, transaction });
        admins.forEach(({ id }) => this.httpService.post(this.getURL(id), { data }).toPromise());
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error with Statistic Cron');
    }
  }
}
