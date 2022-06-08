import { Field, ObjectType } from '@nestjs/graphql';
import { IsDefined, IsNumber, IsString } from 'class-validator';
import { PaymentStatistics } from './payments.dto';

@ObjectType()
export class CustomStatisticDto {
  @Field({ nullable: true })
  @IsDefined()
  @IsNumber()
  users: number;

  @Field(() => PaymentStatistics, { nullable: true })
  @IsDefined()
  @IsString()
  payments: PaymentStatistics;

  @Field({ nullable: true })
  @IsDefined()
  @IsString()
  period: string;
}
