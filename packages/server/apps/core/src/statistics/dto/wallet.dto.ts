import { Field, ObjectType } from '@nestjs/graphql';
import { IsDefined, IsNumber } from 'class-validator';

@ObjectType()
export class WalletStatistics {
  @Field()
  @IsDefined()
  @IsNumber()
  total: number;

  @Field()
  @IsDefined()
  @IsNumber()
  amount: number;
}
