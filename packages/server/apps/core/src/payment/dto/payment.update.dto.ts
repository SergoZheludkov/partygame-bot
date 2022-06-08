import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString, IsDefined, IsOptional } from 'class-validator';

@InputType('PaymentUpdate')
export class PaymentUpdateDto {
  @Field()
  @IsBoolean()
  @IsDefined()
  status: boolean;

  @Field()
  @IsDefined()
  @IsString()
  amount: string;

  @Field()
  @IsDefined()
  @IsString()
  currency: string;

  @Field()
  @IsDefined()
  @IsString()
  user_wallet_number: string;

  @Field()
  @IsOptional()
  @IsNumber()
  referral_id?: string;

  @Field()
  @IsOptional()
  @IsNumber()
  referral_money?: number;
}
