import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('ReturnStatusType')
export class ReturnStatusType {
  @Field()
  status: string;
}

export enum Wallets {
  QIWI = 'qiwi',
  YOO_MONEY = 'yoo_money',
}
