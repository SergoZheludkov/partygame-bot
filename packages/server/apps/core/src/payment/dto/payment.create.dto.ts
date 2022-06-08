/* eslint-disable camelcase */
import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDefined, IsNumber } from 'class-validator';

@InputType('PaymentCreate')
export class PaymentCreateDto {
  @Field()
  @IsDefined()
  @IsString()
  user_id: string;

  @Field()
  @IsDefined()
  @IsNumber()
  wallet_id: number;

  @Field()
  @IsDefined()
  @IsNumber()
  amount: number;
}
