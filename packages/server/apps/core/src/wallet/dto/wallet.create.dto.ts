/* eslint-disable camelcase */
import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDefined } from 'class-validator';

@InputType('WalletCreate')
export class WalletCreateDto {
  @Field()
  @IsDefined()
  @IsString()
  type: string;

  @Field()
  @IsDefined()
  @IsString()
  number: string;

  @Field()
  @IsDefined()
  @IsString()
  token: string;
}
