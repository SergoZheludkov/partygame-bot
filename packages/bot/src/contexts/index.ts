import { User, useUser } from './user';
import { Wallets, useWallets } from './wallets';
import { Statistics, useStatistics } from './statistics';

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
