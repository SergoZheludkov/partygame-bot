import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { WalletStatistics } from './wallet.dto';

@ObjectType()
export class PaymentStatistics {
  @Field({ nullable: true })
  @IsOptional()
  qiwi?: WalletStatistics;

  @Field({ nullable: true })
  @IsOptional()
  webmoney?: WalletStatistics;

  @Field({ nullable: true })
  @IsOptional()
  yoomoney?: WalletStatistics;
}
