/* eslint-disable camelcase */
import { NoOpQueryService } from '@nestjs-query/core';
import { Resolver, Query, Args, Field, InputType } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/sequelize';
import { isNotEmpty } from '@common_ubot/utilits';
import { IsOptional } from 'class-validator';
import { startOfToday, endOfToday } from 'date-fns';
import { Op, Sequelize } from 'sequelize';

import { User } from '../../user/user.model';
import { Payment } from '../../payment/payment.model';
import { Statistic } from '../statistics.model';
import { getPaymentStatistic, getPaymentStatisticSum, PaymentStatistics } from '../helpers';
import { PaymentStatistics as PaymentStatisticsDTO, CustomStatisticDto } from '../dto';

@InputType('StatisticsInput')
export class StatisticsInput {
  @Field()
  @IsOptional()
  users?: boolean;

  @Field()
  @IsOptional()
  payments?: boolean;

  @Field({ description: 'format: 20211025', nullable: true })
  @IsOptional()
  startDate?: number;

  @Field({ description: 'format: 20211130', nullable: true })
  @IsOptional()
  endDate?: number;

  @Field({ nullable: true })
  @IsOptional()
  period?: string;
}

@Resolver()
export class StatisticsResolver extends NoOpQueryService<Statistic> {
  constructor(
    @InjectModel(User) readonly user: typeof User,
    @InjectModel(Payment) readonly payment: typeof Payment,
    @InjectModel(Statistic) readonly statistic: typeof Statistic,
    private sequelize: Sequelize,
  ) {
    super();
  }

  @Query(() => CustomStatisticDto)
  async statisticsBy(@Args('input') { users, payments, startDate, endDate, period: periodType }: StatisticsInput) {
    try {
      return await this.sequelize.transaction(async (transaction) => {
        // If the period is not specified - will return statistics for all available indicators for today
        if (!startDate && !endDate) {
          const period = { [Op.between]: [startOfToday(), endOfToday()] };

          const { count: totalUsers } = await this.user.findAndCountAll({
            where: { created: period },
            transaction,
          });

          const paymentsData = await this.payment.findAll({
            include: ['wallet'],
            where: { is_paid: true, updated: period },
            transaction,
          });

          const paymentsStatistics = paymentsData.reduce(
            getPaymentStatistic,
            {} as PaymentStatistics,
          ) as PaymentStatisticsDTO;

          return { payments: paymentsStatistics, users: totalUsers };
        }

        // Else - will return statistics by settings
        const period = { [Op.between]: [startDate, endDate] };
        const statistics = await this.statistic.findAll({
          where: { id: period },
          attributes: [users ? 'users' : null, payments ? 'payments' : null].filter(isNotEmpty),
        });

        return {
          period: periodType,
          users: users ? statistics.reduce((acc, { users: count }) => acc + count, 0) : null,
          payments: payments
            ? (statistics
                .map(({ payments: paymentsMeta }) => paymentsMeta)
                .reduce(getPaymentStatisticSum, {} as PaymentStatistics) as PaymentStatisticsDTO)
            : null,
        };
      });
    } catch (e) {
      console.error(e);
      throw new Error('Error with query Payment');
    }
  }
}
