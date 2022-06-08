import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber, Length, IsOptional } from 'class-validator';

@InputType('UserUpdate')
export class UserUpdateDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  firstname?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  lastname?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  username?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  balance?: number;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  referral_counter?: number;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  referral_money?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  lang?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  reminder_time?: number;
}
