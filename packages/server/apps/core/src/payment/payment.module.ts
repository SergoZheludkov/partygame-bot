import { HttpModule, Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { PaymentCreateDto, PaymentDto, PaymentUpdateDto } from './dto';
import { Payment } from './payment.model';
import { PaymentResolver } from './resolver/payment.resolver';
import { QiwiService } from './wallets/qiwi.service';
import { UserModule } from '../user/user.module';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [
    WalletModule,
    UserModule,
    HttpModule,
    NestjsQuerySequelizeModule.forFeature([Payment]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([Payment])],
      resolvers: [
        {
          DTOClass: PaymentDto,
          EntityClass: Payment,
          UpdateDTOClass: PaymentUpdateDto,
          CreateDTOClass: PaymentCreateDto,
          read: { defaultResultSize: 50000, maxResultsSize: 100000 },
        },
      ],
    }),
  ],
  providers: [PaymentResolver, QiwiService],
  exports: [NestjsQuerySequelizeModule.forFeature([Payment])],
})
export class PaymentModule {}
