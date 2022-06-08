import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { WalletDto, WalletCreateDto } from './dto';
import { WalletResolver } from './resolver/wallet.resolver';
import { Wallet } from './wallet.model';

@Module({
  imports: [
    NestjsQuerySequelizeModule.forFeature([Wallet]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([Wallet])],
      resolvers: [
        {
          DTOClass: WalletDto,
          EntityClass: Wallet,
          CreateDTOClass: WalletCreateDto,
          read: { defaultResultSize: 50000, maxResultsSize: 100000 },
        },
      ],
    }),
  ],
  providers: [WalletResolver],
  exports: [NestjsQuerySequelizeModule.forFeature([Wallet])],
})
export class WalletModule {}
