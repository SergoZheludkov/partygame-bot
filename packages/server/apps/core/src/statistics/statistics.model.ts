/* eslint-disable camelcase */
import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey } from 'sequelize-typescript';

@Table
export class Statistic extends Model<Statistic> {
  // format example: 20211018 - like a date dd/MM/yyyy
  @PrimaryKey
  @Column
  id: number;

  @Column
  users: number;

  // format example:
  // {qiwi:{total:10,amount:2429},webmoney:{total:6,amount:320},yoomoney,{total:1,amount:25}}
  // amount in dollars
  @Column
  payments: string;

  @CreatedAt
  created: Date;

  @UpdatedAt
  updated: Date;
}
