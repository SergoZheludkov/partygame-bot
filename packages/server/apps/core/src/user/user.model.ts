/* eslint-disable camelcase */
import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey, Default, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: string;

  @Column({ allowNull: true })
  firstname: string;

  @Column({ allowNull: true })
  lastname: string;

  @Column({ unique: true })
  username: string;

  @Default(0)
  @Column
  balance: number;

  @Default(0)
  @Column({ allowNull: true })
  who_invite: string;

  @Default(0)
  @Column
  referral_counter: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  referral_money: number;

  @Column
  lang: string;

  @Default(false)
  @Column
  is_admin: boolean;

  @Default(0)
  @Column
  reminder_time: number;

  @CreatedAt
  created: Date;

  @UpdatedAt
  updated: Date;
}
