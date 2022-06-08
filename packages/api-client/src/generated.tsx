import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type BooleanFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
};

export type CheckPaymentInput = {
  comment: Scalars['String'];
};


export type CreateManyPaymentsInput = {
  /** Array of records to create */
  payments: Array<PaymentCreate>;
};

export type CreateManyStatisticsInput = {
  /** Array of records to create */
  statistics: Array<StatisticCreate>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<UserCreate>;
};

export type CreateManyWalletsInput = {
  /** Array of records to create */
  wallets: Array<WalletCreate>;
};

export type CreateOnePaymentInput = {
  /** The record to create */
  payment: PaymentCreate;
};

export type CreateOneStatisticInput = {
  /** The record to create */
  statistic: StatisticCreate;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: UserCreate;
};

export type CreateOneWalletInput = {
  /** The record to create */
  wallet: WalletCreate;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: Maybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: Maybe<Scalars['Int']>;
  /** Paginate last */
  last?: Maybe<Scalars['Int']>;
};

export type CustomStatisticDto = {
  __typename?: 'CustomStatisticDto';
  payments?: Maybe<PaymentStatistics>;
  period?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['Float']>;
};


export type DeleteManyPaymentsInput = {
  /** Filter to find records to delete */
  filter: PaymentDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManyStatisticsInput = {
  /** Filter to find records to delete */
  filter: StatisticDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteManyWalletsInput = {
  /** Filter to find records to delete */
  filter: WalletDeleteFilter;
};

export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addWallets: ReturnStatusType;
  checkPayment: Payment;
  createManyPayments: Array<Payment>;
  createManyStatistics: Array<Statistic>;
  createManyUsers: Array<User>;
  createManyWallets: Array<Wallet>;
  createOnePayment: Payment;
  createOneStatistic: Statistic;
  createOneUser: User;
  createOneWallet: Wallet;
  createPayment: Payment;
  createUser: User;
  deleteManyPayments: DeleteManyResponse;
  deleteManyStatistics: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteManyWallets: DeleteManyResponse;
  deleteOnePayment: PaymentDeleteResponse;
  deleteOneStatistic: StatisticDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneWallet: WalletDeleteResponse;
  setUserOnPayment: Payment;
  setWalletOnPayment: Payment;
  switchWalletStatus: ReturnStatusType;
  updateManyPayments: UpdateManyResponse;
  updateManyStatistics: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateManyWallets: UpdateManyResponse;
  updateOnePayment: Payment;
  updateOneStatistic: Statistic;
  updateOneUser: User;
  updateOneWallet: Wallet;
};


export type MutationAddWalletsArgs = {
  input: Array<WalletCreate>;
};


export type MutationCheckPaymentArgs = {
  input: CheckPaymentInput;
};


export type MutationCreateManyPaymentsArgs = {
  input: CreateManyPaymentsInput;
};


export type MutationCreateManyStatisticsArgs = {
  input: CreateManyStatisticsInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateManyWalletsArgs = {
  input: CreateManyWalletsInput;
};


export type MutationCreateOnePaymentArgs = {
  input: CreateOnePaymentInput;
};


export type MutationCreateOneStatisticArgs = {
  input: CreateOneStatisticInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateOneWalletArgs = {
  input: CreateOneWalletInput;
};


export type MutationCreatePaymentArgs = {
  input: PaymentCreate;
};


export type MutationCreateUserArgs = {
  input: UserCreate;
};


export type MutationDeleteManyPaymentsArgs = {
  input: DeleteManyPaymentsInput;
};


export type MutationDeleteManyStatisticsArgs = {
  input: DeleteManyStatisticsInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteManyWalletsArgs = {
  input: DeleteManyWalletsInput;
};


export type MutationDeleteOnePaymentArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteOneStatisticArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteOneWalletArgs = {
  input: DeleteOneInput;
};


export type MutationSetUserOnPaymentArgs = {
  input: RelationInput;
};


export type MutationSetWalletOnPaymentArgs = {
  input: RelationInput;
};


export type MutationSwitchWalletStatusArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateManyPaymentsArgs = {
  input: UpdateManyPaymentsInput;
};


export type MutationUpdateManyStatisticsArgs = {
  input: UpdateManyStatisticsInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateManyWalletsArgs = {
  input: UpdateManyWalletsInput;
};


export type MutationUpdateOnePaymentArgs = {
  input: UpdateOnePaymentInput;
};


export type MutationUpdateOneStatisticArgs = {
  input: UpdateOneStatisticInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};


export type MutationUpdateOneWalletArgs = {
  input: UpdateOneWalletInput;
};

export type NumberFieldComparison = {
  between?: Maybe<NumberFieldComparisonBetween>;
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  notBetween?: Maybe<NumberFieldComparisonBetween>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']>;
  comment: Scalars['String'];
  created: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  expected_amount: Scalars['String'];
  id: Scalars['Float'];
  is_paid: Scalars['Boolean'];
  referral_id: Scalars['String'];
  referral_money: Scalars['Float'];
  updated: Scalars['DateTime'];
  user: User;
  user_id: Scalars['String'];
  user_wallet_number?: Maybe<Scalars['String']>;
  wallet: Wallet;
  wallet_id: Scalars['String'];
};

export type PaymentAvgAggregate = {
  __typename?: 'PaymentAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** Array of edges. */
  edges: Array<PaymentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PaymentCountAggregate = {
  __typename?: 'PaymentCountAggregate';
  amount?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_paid?: Maybe<Scalars['Int']>;
  referral_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  user_wallet_number?: Maybe<Scalars['Int']>;
  wallet_id?: Maybe<Scalars['Int']>;
};

export type PaymentCreate = {
  amount: Scalars['Float'];
  user_id: Scalars['String'];
  wallet_id: Scalars['Float'];
};

export type PaymentDeleteFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<PaymentDeleteFilter>>;
  comment?: Maybe<StringFieldComparison>;
  currency?: Maybe<StringFieldComparison>;
  id?: Maybe<NumberFieldComparison>;
  is_paid?: Maybe<BooleanFieldComparison>;
  or?: Maybe<Array<PaymentDeleteFilter>>;
  referral_id?: Maybe<StringFieldComparison>;
  user_id?: Maybe<StringFieldComparison>;
  user_wallet_number?: Maybe<StringFieldComparison>;
  wallet_id?: Maybe<StringFieldComparison>;
};

export type PaymentDeleteResponse = {
  __typename?: 'PaymentDeleteResponse';
  amount?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  expected_amount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  is_paid?: Maybe<Scalars['Boolean']>;
  referral_id?: Maybe<Scalars['String']>;
  referral_money?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['String']>;
  user_wallet_number?: Maybe<Scalars['String']>;
  wallet_id?: Maybe<Scalars['String']>;
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Payment */
  node: Payment;
};

export type PaymentFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<PaymentFilter>>;
  comment?: Maybe<StringFieldComparison>;
  currency?: Maybe<StringFieldComparison>;
  id?: Maybe<NumberFieldComparison>;
  is_paid?: Maybe<BooleanFieldComparison>;
  or?: Maybe<Array<PaymentFilter>>;
  referral_id?: Maybe<StringFieldComparison>;
  user_id?: Maybe<StringFieldComparison>;
  user_wallet_number?: Maybe<StringFieldComparison>;
  wallet_id?: Maybe<StringFieldComparison>;
};

export type PaymentMaxAggregate = {
  __typename?: 'PaymentMaxAggregate';
  amount?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  referral_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  user_wallet_number?: Maybe<Scalars['String']>;
  wallet_id?: Maybe<Scalars['String']>;
};

export type PaymentMinAggregate = {
  __typename?: 'PaymentMinAggregate';
  amount?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  referral_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  user_wallet_number?: Maybe<Scalars['String']>;
  wallet_id?: Maybe<Scalars['String']>;
};

export type PaymentSort = {
  direction: SortDirection;
  field: PaymentSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum PaymentSortFields {
  Amount = 'amount',
  Comment = 'comment',
  Currency = 'currency',
  Id = 'id',
  IsPaid = 'is_paid',
  ReferralId = 'referral_id',
  UserId = 'user_id',
  UserWalletNumber = 'user_wallet_number',
  WalletId = 'wallet_id'
}

export type PaymentStatistics = {
  __typename?: 'PaymentStatistics';
  qiwi?: Maybe<WalletStatistics>;
  webmoney?: Maybe<WalletStatistics>;
  yoomoney?: Maybe<WalletStatistics>;
};

export type PaymentSumAggregate = {
  __typename?: 'PaymentSumAggregate';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PaymentUpdate = {
  amount: Scalars['String'];
  currency: Scalars['String'];
  referral_id: Scalars['String'];
  referral_money: Scalars['Float'];
  status: Scalars['Boolean'];
  user_wallet_number: Scalars['String'];
};

export type PaymentUpdateFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<PaymentUpdateFilter>>;
  comment?: Maybe<StringFieldComparison>;
  currency?: Maybe<StringFieldComparison>;
  id?: Maybe<NumberFieldComparison>;
  is_paid?: Maybe<BooleanFieldComparison>;
  or?: Maybe<Array<PaymentUpdateFilter>>;
  referral_id?: Maybe<StringFieldComparison>;
  user_id?: Maybe<StringFieldComparison>;
  user_wallet_number?: Maybe<StringFieldComparison>;
  wallet_id?: Maybe<StringFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  allWallets: Array<Wallet>;
  getUserPayments: Array<Payment>;
  oneWallet: Wallet;
  payment?: Maybe<Payment>;
  payments: PaymentConnection;
  statistic?: Maybe<Statistic>;
  statistics: StatisticConnection;
  statisticsBy: CustomStatisticDto;
  user?: Maybe<User>;
  users: UserConnection;
  wallet?: Maybe<Wallet>;
  wallets: WalletConnection;
};


export type QueryGetUserPaymentsArgs = {
  id: Scalars['String'];
};


export type QueryOneWalletArgs = {
  type: Scalars['String'];
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  filter?: Maybe<PaymentFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<PaymentSort>>;
};


export type QueryStatisticArgs = {
  id: Scalars['ID'];
};


export type QueryStatisticsArgs = {
  filter?: Maybe<StatisticFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<StatisticSort>>;
};


export type QueryStatisticsByArgs = {
  input: StatisticsInput;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: Maybe<UserFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<UserSort>>;
};


export type QueryWalletArgs = {
  id: Scalars['ID'];
};


export type QueryWalletsArgs = {
  filter?: Maybe<WalletFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<WalletSort>>;
};

export type RelationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type ReturnStatusType = {
  __typename?: 'ReturnStatusType';
  status: Scalars['String'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type Statistic = {
  __typename?: 'Statistic';
  created: Scalars['DateTime'];
  id: Scalars['Float'];
  payments: Scalars['String'];
  updated: Scalars['DateTime'];
  users: Scalars['Float'];
};

export type StatisticAvgAggregate = {
  __typename?: 'StatisticAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  users?: Maybe<Scalars['Float']>;
};

export type StatisticConnection = {
  __typename?: 'StatisticConnection';
  /** Array of edges. */
  edges: Array<StatisticEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type StatisticCountAggregate = {
  __typename?: 'StatisticCountAggregate';
  id?: Maybe<Scalars['Int']>;
  users?: Maybe<Scalars['Int']>;
};

export type StatisticCreate = {
  id: Scalars['Float'];
  payments: Scalars['String'];
  users: Scalars['Float'];
};

export type StatisticDeleteFilter = {
  and?: Maybe<Array<StatisticDeleteFilter>>;
  id?: Maybe<NumberFieldComparison>;
  or?: Maybe<Array<StatisticDeleteFilter>>;
  users?: Maybe<NumberFieldComparison>;
};

export type StatisticDeleteResponse = {
  __typename?: 'StatisticDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  payments?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Scalars['Float']>;
};

export type StatisticEdge = {
  __typename?: 'StatisticEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Statistic */
  node: Statistic;
};

export type StatisticFilter = {
  and?: Maybe<Array<StatisticFilter>>;
  id?: Maybe<NumberFieldComparison>;
  or?: Maybe<Array<StatisticFilter>>;
  users?: Maybe<NumberFieldComparison>;
};

export type StatisticMaxAggregate = {
  __typename?: 'StatisticMaxAggregate';
  id?: Maybe<Scalars['Float']>;
  users?: Maybe<Scalars['Float']>;
};

export type StatisticMinAggregate = {
  __typename?: 'StatisticMinAggregate';
  id?: Maybe<Scalars['Float']>;
  users?: Maybe<Scalars['Float']>;
};

export type StatisticSort = {
  direction: SortDirection;
  field: StatisticSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum StatisticSortFields {
  Id = 'id',
  Users = 'users'
}

export type StatisticSumAggregate = {
  __typename?: 'StatisticSumAggregate';
  id?: Maybe<Scalars['Float']>;
  users?: Maybe<Scalars['Float']>;
};

export type StatisticUpdateFilter = {
  and?: Maybe<Array<StatisticUpdateFilter>>;
  id?: Maybe<NumberFieldComparison>;
  or?: Maybe<Array<StatisticUpdateFilter>>;
  users?: Maybe<NumberFieldComparison>;
};

export type StatisticsInput = {
  /** format: 20211130 */
  endDate?: Maybe<Scalars['Float']>;
  payments: Scalars['Boolean'];
  period?: Maybe<Scalars['String']>;
  /** format: 20211025 */
  startDate?: Maybe<Scalars['Float']>;
  users: Scalars['Boolean'];
};

export type StringFieldComparison = {
  eq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  notLike?: Maybe<Scalars['String']>;
};

export type UpdateManyPaymentsInput = {
  /** Filter used to find fields to update */
  filter: PaymentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: PaymentUpdate;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManyStatisticsInput = {
  /** Filter used to find fields to update */
  filter: StatisticUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStatistic;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserUpdate;
};

export type UpdateManyWalletsInput = {
  /** Filter used to find fields to update */
  filter: WalletUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateWallet;
};

export type UpdateOnePaymentInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: PaymentUpdate;
};

export type UpdateOneStatisticInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateStatistic;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UserUpdate;
};

export type UpdateOneWalletInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateWallet;
};

export type UpdateStatistic = {
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  payments?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Scalars['Float']>;
};

export type UpdateWallet = {
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  input_money?: Maybe<Scalars['Float']>;
  is_active?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  balance: Scalars['Float'];
  created: Scalars['DateTime'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_admin: Scalars['Boolean'];
  lang: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  referral_counter: Scalars['Float'];
  referral_money: Scalars['Float'];
  reminder_time: Scalars['Float'];
  updated: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  balance?: Maybe<Scalars['Float']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  balance?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  referral_counter?: Maybe<Scalars['Int']>;
  referral_money?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['Int']>;
  who_invite?: Maybe<Scalars['Int']>;
};

export type UserCreate = {
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lang: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserDeleteFilter = {
  and?: Maybe<Array<UserDeleteFilter>>;
  balance?: Maybe<NumberFieldComparison>;
  firstname?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserDeleteFilter>>;
  referral_counter?: Maybe<NumberFieldComparison>;
  referral_money?: Maybe<NumberFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  who_invite?: Maybe<StringFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  balance?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['DateTime']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  reminder_time?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: Maybe<Array<UserFilter>>;
  balance?: Maybe<NumberFieldComparison>;
  firstname?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserFilter>>;
  referral_counter?: Maybe<NumberFieldComparison>;
  referral_money?: Maybe<NumberFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  who_invite?: Maybe<StringFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  balance?: Maybe<Scalars['Float']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  balance?: Maybe<Scalars['Float']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  who_invite?: Maybe<Scalars['String']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum UserSortFields {
  Balance = 'balance',
  Firstname = 'firstname',
  Id = 'id',
  Lastname = 'lastname',
  ReferralCounter = 'referral_counter',
  ReferralMoney = 'referral_money',
  Username = 'username',
  WhoInvite = 'who_invite'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  balance?: Maybe<Scalars['Float']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
};

export type UserUpdate = {
  balance?: Maybe<Scalars['Float']>;
  firstname?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  referral_counter?: Maybe<Scalars['Float']>;
  referral_money?: Maybe<Scalars['Float']>;
  reminder_time?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
};

export type UserUpdateFilter = {
  and?: Maybe<Array<UserUpdateFilter>>;
  balance?: Maybe<NumberFieldComparison>;
  firstname?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserUpdateFilter>>;
  referral_counter?: Maybe<NumberFieldComparison>;
  referral_money?: Maybe<NumberFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  who_invite?: Maybe<StringFieldComparison>;
};

export type Wallet = {
  __typename?: 'Wallet';
  created: Scalars['DateTime'];
  id: Scalars['Float'];
  input_money: Scalars['Float'];
  is_active: Scalars['Boolean'];
  number: Scalars['String'];
  token: Scalars['String'];
  type: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type WalletAvgAggregate = {
  __typename?: 'WalletAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  input_money?: Maybe<Scalars['Float']>;
};

export type WalletConnection = {
  __typename?: 'WalletConnection';
  /** Array of edges. */
  edges: Array<WalletEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type WalletCountAggregate = {
  __typename?: 'WalletCountAggregate';
  id?: Maybe<Scalars['Int']>;
  input_money?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type WalletCreate = {
  number: Scalars['String'];
  token: Scalars['String'];
  type: Scalars['String'];
};

export type WalletDeleteFilter = {
  and?: Maybe<Array<WalletDeleteFilter>>;
  id?: Maybe<NumberFieldComparison>;
  input_money?: Maybe<NumberFieldComparison>;
  is_active?: Maybe<BooleanFieldComparison>;
  number?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<WalletDeleteFilter>>;
  type?: Maybe<StringFieldComparison>;
};

export type WalletDeleteResponse = {
  __typename?: 'WalletDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  input_money?: Maybe<Scalars['Float']>;
  is_active?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type WalletEdge = {
  __typename?: 'WalletEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Wallet */
  node: Wallet;
};

export type WalletFilter = {
  and?: Maybe<Array<WalletFilter>>;
  id?: Maybe<NumberFieldComparison>;
  input_money?: Maybe<NumberFieldComparison>;
  is_active?: Maybe<BooleanFieldComparison>;
  number?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<WalletFilter>>;
  type?: Maybe<StringFieldComparison>;
};

export type WalletMaxAggregate = {
  __typename?: 'WalletMaxAggregate';
  id?: Maybe<Scalars['Float']>;
  input_money?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type WalletMinAggregate = {
  __typename?: 'WalletMinAggregate';
  id?: Maybe<Scalars['Float']>;
  input_money?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type WalletSort = {
  direction: SortDirection;
  field: WalletSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum WalletSortFields {
  Id = 'id',
  InputMoney = 'input_money',
  IsActive = 'is_active',
  Number = 'number',
  Type = 'type'
}

export type WalletStatistics = {
  __typename?: 'WalletStatistics';
  amount: Scalars['Float'];
  total: Scalars['Float'];
};

export type WalletSumAggregate = {
  __typename?: 'WalletSumAggregate';
  id?: Maybe<Scalars['Float']>;
  input_money?: Maybe<Scalars['Float']>;
};

export type WalletUpdateFilter = {
  and?: Maybe<Array<WalletUpdateFilter>>;
  id?: Maybe<NumberFieldComparison>;
  input_money?: Maybe<NumberFieldComparison>;
  is_active?: Maybe<BooleanFieldComparison>;
  number?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<WalletUpdateFilter>>;
  type?: Maybe<StringFieldComparison>;
};

export type AllPaymentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AllPaymentQuery = (
  { __typename?: 'Query' }
  & { getUserPayments: Array<(
    { __typename?: 'Payment' }
    & Pick<Payment, 'currency' | 'amount' | 'expected_amount' | 'comment' | 'updated'>
    & { wallet: (
      { __typename?: 'Wallet' }
      & Pick<Wallet, 'id' | 'number' | 'type'>
    ) }
  )> }
);

export type CreatePaymentMutationVariables = Exact<{
  input: PaymentCreate;
}>;


export type CreatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { createPayment: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'user_id' | 'wallet_id' | 'amount' | 'expected_amount' | 'currency' | 'comment'>
    & { wallet: (
      { __typename?: 'Wallet' }
      & Pick<Wallet, 'id' | 'number' | 'type'>
    ) }
  ) }
);

export type CheckPaymentMutationVariables = Exact<{
  input: CheckPaymentInput;
}>;


export type CheckPaymentMutation = (
  { __typename?: 'Mutation' }
  & { checkPayment: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'user_id' | 'wallet_id' | 'currency' | 'amount' | 'expected_amount' | 'is_paid'>
    & { wallet: (
      { __typename?: 'Wallet' }
      & Pick<Wallet, 'id' | 'number' | 'type'>
    ) }
  ) }
);

export type StatisticsBaseFragment = (
  { __typename?: 'CustomStatisticDto' }
  & Pick<CustomStatisticDto, 'period' | 'users'>
  & { payments?: Maybe<(
    { __typename?: 'PaymentStatistics' }
    & { qiwi?: Maybe<(
      { __typename?: 'WalletStatistics' }
      & Pick<WalletStatistics, 'amount' | 'total'>
    )>, webmoney?: Maybe<(
      { __typename?: 'WalletStatistics' }
      & Pick<WalletStatistics, 'amount' | 'total'>
    )>, yoomoney?: Maybe<(
      { __typename?: 'WalletStatistics' }
      & Pick<WalletStatistics, 'amount' | 'total'>
    )> }
  )> }
);

export type StatisticsByQueryVariables = Exact<{
  period?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['Boolean']>;
  payments?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['Float']>;
}>;


export type StatisticsByQuery = (
  { __typename?: 'Query' }
  & { statisticsBy: (
    { __typename?: 'CustomStatisticDto' }
    & MakeOptional<Pick<CustomStatisticDto, 'period' | 'users'>, 'users'>
    & { payments?: Maybe<(
      { __typename?: 'PaymentStatistics' }
      & { qiwi?: Maybe<(
        { __typename?: 'WalletStatistics' }
        & Pick<WalletStatistics, 'amount' | 'total'>
      )>, webmoney?: Maybe<(
        { __typename?: 'WalletStatistics' }
        & Pick<WalletStatistics, 'amount' | 'total'>
      )>, yoomoney?: Maybe<(
        { __typename?: 'WalletStatistics' }
        & Pick<WalletStatistics, 'amount' | 'total'>
      )> }
    )> }
  ) }
);

export type UserBaseFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstname' | 'lastname' | 'username' | 'balance' | 'who_invite' | 'referral_counter' | 'referral_money' | 'is_admin' | 'lang' | 'reminder_time'>
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserBaseFragment
  )> }
);

export type CreateUserMutationVariables = Exact<{
  input: UserCreate;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  input: UpdateOneUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type WalletBaseFragment = (
  { __typename?: 'Wallet' }
  & Pick<Wallet, 'id' | 'number' | 'type' | 'is_active'>
);

export type OneWalletQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type OneWalletQuery = (
  { __typename?: 'Query' }
  & { oneWallet: (
    { __typename?: 'Wallet' }
    & WalletBaseFragment
  ) }
);

export type AllWalletsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllWalletsQuery = (
  { __typename?: 'Query' }
  & { allWallets: Array<(
    { __typename?: 'Wallet' }
    & WalletBaseFragment
  )> }
);

export type AddWalletsMutationVariables = Exact<{
  input: Array<WalletCreate> | WalletCreate;
}>;


export type AddWalletsMutation = (
  { __typename?: 'Mutation' }
  & { addWallets: (
    { __typename?: 'ReturnStatusType' }
    & Pick<ReturnStatusType, 'status'>
  ) }
);

export type SwitchWalletStatusMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type SwitchWalletStatusMutation = (
  { __typename?: 'Mutation' }
  & { switchWalletStatus: (
    { __typename?: 'ReturnStatusType' }
    & Pick<ReturnStatusType, 'status'>
  ) }
);

export const StatisticsBaseFragmentDoc = gql`
    fragment StatisticsBase on CustomStatisticDto {
  period
  users
  payments {
    qiwi {
      amount
      total
    }
    webmoney {
      amount
      total
    }
    yoomoney {
      amount
      total
    }
  }
}
    `;
export const UserBaseFragmentDoc = gql`
    fragment UserBase on User {
  id
  firstname
  lastname
  username
  balance
  who_invite
  referral_counter
  referral_money
  is_admin
  lang
  reminder_time
}
    `;
export const WalletBaseFragmentDoc = gql`
    fragment WalletBase on Wallet {
  id
  number
  type
  is_active
}
    `;
export const AllPaymentDocument = gql`
    query allPayment($id: String!) {
  getUserPayments(id: $id) {
    currency
    amount
    expected_amount
    comment
    updated
    wallet {
      id
      number
      type
    }
  }
}
    `;

/**
 * __useAllPaymentQuery__
 *
 * To run a query within a React component, call `useAllPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPaymentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllPaymentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllPaymentQuery, AllPaymentQueryVariables>) {
        return ApolloReactHooks.useQuery<AllPaymentQuery, AllPaymentQueryVariables>(AllPaymentDocument, baseOptions);
      }
export function useAllPaymentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllPaymentQuery, AllPaymentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllPaymentQuery, AllPaymentQueryVariables>(AllPaymentDocument, baseOptions);
        }
export type AllPaymentQueryHookResult = ReturnType<typeof useAllPaymentQuery>;
export type AllPaymentLazyQueryHookResult = ReturnType<typeof useAllPaymentLazyQuery>;
export type AllPaymentQueryResult = ApolloReactCommon.QueryResult<AllPaymentQuery, AllPaymentQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation createPayment($input: PaymentCreate!) {
  createPayment(input: $input) {
    user_id
    wallet_id
    amount
    expected_amount
    currency
    comment
    wallet {
      id
      number
      type
    }
  }
}
    `;
export type CreatePaymentMutationFn = ApolloReactCommon.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, baseOptions);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = ApolloReactCommon.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CheckPaymentDocument = gql`
    mutation checkPayment($input: CheckPaymentInput!) {
  checkPayment(input: $input) {
    user_id
    wallet_id
    currency
    amount
    expected_amount
    is_paid
    wallet {
      id
      number
      type
    }
  }
}
    `;
export type CheckPaymentMutationFn = ApolloReactCommon.MutationFunction<CheckPaymentMutation, CheckPaymentMutationVariables>;

/**
 * __useCheckPaymentMutation__
 *
 * To run a mutation, you first call `useCheckPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkPaymentMutation, { data, loading, error }] = useCheckPaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckPaymentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CheckPaymentMutation, CheckPaymentMutationVariables>) {
        return ApolloReactHooks.useMutation<CheckPaymentMutation, CheckPaymentMutationVariables>(CheckPaymentDocument, baseOptions);
      }
export type CheckPaymentMutationHookResult = ReturnType<typeof useCheckPaymentMutation>;
export type CheckPaymentMutationResult = ApolloReactCommon.MutationResult<CheckPaymentMutation>;
export type CheckPaymentMutationOptions = ApolloReactCommon.BaseMutationOptions<CheckPaymentMutation, CheckPaymentMutationVariables>;
export const StatisticsByDocument = gql`
    query statisticsBy($period: String, $users: Boolean = false, $payments: Boolean = false, $startDate: Float, $endDate: Float) {
  statisticsBy(
    input: {period: $period, users: $users, payments: $payments, startDate: $startDate, endDate: $endDate}
  ) {
    period
    users @include(if: $users)
    payments @include(if: $payments) {
      qiwi {
        amount
        total
      }
      webmoney {
        amount
        total
      }
      yoomoney {
        amount
        total
      }
    }
  }
}
    `;

/**
 * __useStatisticsByQuery__
 *
 * To run a query within a React component, call `useStatisticsByQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticsByQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticsByQuery({
 *   variables: {
 *      period: // value for 'period'
 *      users: // value for 'users'
 *      payments: // value for 'payments'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useStatisticsByQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StatisticsByQuery, StatisticsByQueryVariables>) {
        return ApolloReactHooks.useQuery<StatisticsByQuery, StatisticsByQueryVariables>(StatisticsByDocument, baseOptions);
      }
export function useStatisticsByLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StatisticsByQuery, StatisticsByQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StatisticsByQuery, StatisticsByQueryVariables>(StatisticsByDocument, baseOptions);
        }
export type StatisticsByQueryHookResult = ReturnType<typeof useStatisticsByQuery>;
export type StatisticsByLazyQueryHookResult = ReturnType<typeof useStatisticsByLazyQuery>;
export type StatisticsByQueryResult = ApolloReactCommon.QueryResult<StatisticsByQuery, StatisticsByQueryVariables>;
export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    ...UserBase
  }
}
    ${UserBaseFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: UserCreate!) {
  createUser(input: $input) {
    id
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateOneUserInput!) {
  updateOneUser(input: $input) {
    id
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const OneWalletDocument = gql`
    query oneWallet($type: String!) {
  oneWallet(type: $type) {
    ...WalletBase
  }
}
    ${WalletBaseFragmentDoc}`;

/**
 * __useOneWalletQuery__
 *
 * To run a query within a React component, call `useOneWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneWalletQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useOneWalletQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OneWalletQuery, OneWalletQueryVariables>) {
        return ApolloReactHooks.useQuery<OneWalletQuery, OneWalletQueryVariables>(OneWalletDocument, baseOptions);
      }
export function useOneWalletLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OneWalletQuery, OneWalletQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OneWalletQuery, OneWalletQueryVariables>(OneWalletDocument, baseOptions);
        }
export type OneWalletQueryHookResult = ReturnType<typeof useOneWalletQuery>;
export type OneWalletLazyQueryHookResult = ReturnType<typeof useOneWalletLazyQuery>;
export type OneWalletQueryResult = ApolloReactCommon.QueryResult<OneWalletQuery, OneWalletQueryVariables>;
export const AllWalletsDocument = gql`
    query allWallets {
  allWallets {
    ...WalletBase
  }
}
    ${WalletBaseFragmentDoc}`;

/**
 * __useAllWalletsQuery__
 *
 * To run a query within a React component, call `useAllWalletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllWalletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllWalletsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllWalletsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllWalletsQuery, AllWalletsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllWalletsQuery, AllWalletsQueryVariables>(AllWalletsDocument, baseOptions);
      }
export function useAllWalletsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllWalletsQuery, AllWalletsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllWalletsQuery, AllWalletsQueryVariables>(AllWalletsDocument, baseOptions);
        }
export type AllWalletsQueryHookResult = ReturnType<typeof useAllWalletsQuery>;
export type AllWalletsLazyQueryHookResult = ReturnType<typeof useAllWalletsLazyQuery>;
export type AllWalletsQueryResult = ApolloReactCommon.QueryResult<AllWalletsQuery, AllWalletsQueryVariables>;
export const AddWalletsDocument = gql`
    mutation addWallets($input: [WalletCreate!]!) {
  addWallets(input: $input) {
    status
  }
}
    `;
export type AddWalletsMutationFn = ApolloReactCommon.MutationFunction<AddWalletsMutation, AddWalletsMutationVariables>;

/**
 * __useAddWalletsMutation__
 *
 * To run a mutation, you first call `useAddWalletsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWalletsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWalletsMutation, { data, loading, error }] = useAddWalletsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddWalletsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddWalletsMutation, AddWalletsMutationVariables>) {
        return ApolloReactHooks.useMutation<AddWalletsMutation, AddWalletsMutationVariables>(AddWalletsDocument, baseOptions);
      }
export type AddWalletsMutationHookResult = ReturnType<typeof useAddWalletsMutation>;
export type AddWalletsMutationResult = ApolloReactCommon.MutationResult<AddWalletsMutation>;
export type AddWalletsMutationOptions = ApolloReactCommon.BaseMutationOptions<AddWalletsMutation, AddWalletsMutationVariables>;
export const SwitchWalletStatusDocument = gql`
    mutation switchWalletStatus($id: Float!) {
  switchWalletStatus(id: $id) {
    status
  }
}
    `;
export type SwitchWalletStatusMutationFn = ApolloReactCommon.MutationFunction<SwitchWalletStatusMutation, SwitchWalletStatusMutationVariables>;

/**
 * __useSwitchWalletStatusMutation__
 *
 * To run a mutation, you first call `useSwitchWalletStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSwitchWalletStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [switchWalletStatusMutation, { data, loading, error }] = useSwitchWalletStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSwitchWalletStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SwitchWalletStatusMutation, SwitchWalletStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<SwitchWalletStatusMutation, SwitchWalletStatusMutationVariables>(SwitchWalletStatusDocument, baseOptions);
      }
export type SwitchWalletStatusMutationHookResult = ReturnType<typeof useSwitchWalletStatusMutation>;
export type SwitchWalletStatusMutationResult = ApolloReactCommon.MutationResult<SwitchWalletStatusMutation>;
export type SwitchWalletStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<SwitchWalletStatusMutation, SwitchWalletStatusMutationVariables>;