/* eslint-disable camelcase */
import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql';
import { UserDto } from '../../user/dto';
import { WalletDto } from '../../wallet/dto';

@ObjectType('Payment')
@Relation('user', () => UserDto, { disableRemove: true })
@Relation('wallet', () => WalletDto, { disableRemove: true })
export class PaymentDto {
  @FilterableField()
  id: number;

  @FilterableField()
  user_id: string;

  @FilterableField()
  wallet_id: string;

  @FilterableField({ nullable: true })
  currency: string;

  @FilterableField({ nullable: true })
  amount: number;

  @FilterableField({ nullable: true })
  user_wallet_number: string;

  @Field()
  expected_amount: string;

  @FilterableField()
  comment: string;

  @FilterableField()
  is_paid: boolean;

  @FilterableField()
  referral_id: string;

  @Field()
  referral_money: number;

  @Field(() => GraphQLISODateTime)
  created: Date;

  @Field(() => GraphQLISODateTime)
  updated: Date;
}
