/* eslint-disable camelcase */
import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  Default,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Wallet } from '../wallet/wallet.model';

@Table
export class Payment extends Model<Payment> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  // id плательщика
  @ForeignKey(() => User)
  @Column
  user_id: string;

  @BelongsTo(() => User)
  user: User;

  // id кошелька qiwi | yoomoney | webmoney
  @ForeignKey(() => Wallet)
  @Column
  wallet_id: number;

  @BelongsTo(() => Wallet)
  wallet: Wallet;

  // валюта RUB | USD | EUR | KZT
  @Column({ allowNull: true })
  currency: string;

  // сумма
  @Column({ allowNull: true })
  amount: number;

  // qiwi - 7 981 555 1110 | yoomoney - 4100 7777 2222 999 | webmoney - 2134 5555 2299
  @Column({ allowNull: true })
  user_wallet_number: string;

  // ожидаемая сумма в разных валютах - usd/eur/rub/kzt - 10/9/750/4270
  @Column
  expected_amount: string;

  // ожидаемый комментарий к платежу
  @Column({ unique: true })
  comment: string;

  @Default(false)
  @Column
  is_paid: boolean;

  @Column({ allowNull: true })
  referral_id: string;

  @Column({ type: DataType.FLOAT, allowNull: true })
  referral_money: number;

  @CreatedAt
  created: Date;

  @UpdatedAt
  updated: Date;
}
