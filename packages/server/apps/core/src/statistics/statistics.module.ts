import { HttpModule, Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { StatisticsCreateDto, StatisticsDto } from './dto';
import { Statistic } from './statistics.model';
import { StatisticsResolver } from './resolver/statistics.resolver';
import { StatisticsCronService } from './statistics-cron.service';
import { UserModule } from '../user/user.module';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [
    HttpModule,
    PaymentModule,
    UserModule,
    NestjsQuerySequelizeModule.forFeature([Statistic]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([Statistic])],
      resolvers: [
        {
          DTOClass: StatisticsDto,
          EntityClass: Statistic,
          CreateDTOClass: StatisticsCreateDto,
          read: { defaultResultSize: 50000, maxResultsSize: 100000 },
        },
      ],
    }),
  ],
  providers: [StatisticsResolver, StatisticsCronService],
  exports: [NestjsQuerySequelizeModule.forFeature([Statistic])],
})
export class StatisticsModule {}
