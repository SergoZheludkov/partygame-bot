/* eslint-disable camelcase */
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field } from '@nestjs/graphql';

@ObjectType('Wallet')
export class WalletDto {
  @FilterableField()
  id: number;

  @FilterableField()
  type: string;

  @FilterableField()
  number: string;

  @Field()
  token: string;

  @FilterableField()
  is_active: boolean;

  @FilterableField()
  input_money: number;

  @Field(() => GraphQLISODateTime)
  created: Date;

  @Field(() => GraphQLISODateTime)
  updated: Date;
}
