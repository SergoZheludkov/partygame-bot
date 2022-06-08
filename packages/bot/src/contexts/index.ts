import { User, useUser } from './User';
import { Wallets, useWallets } from './Wallets';
import { Statistics, useStatistics } from './Statistics';

export const Provider = {
  User,
  Wallets,
  Statistics,
};

export const Hook = {
  useUser,
  useWallets,
  useStatistics,
};
