/* eslint-disable camelcase */
import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, Default } from 'sequelize-typescript';

@Table
export class Wallet extends Model<Wallet> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  type: string;

  @Column({ unique: true })
  number: string;

  @Column({ unique: true })
  token: string;

  @Default(true)
  @Column
  is_active: boolean;

  @Default(0)
  @Column
  input_money: number;

  @CreatedAt
  created: Date;

  @UpdatedAt
  updated: Date;
}
