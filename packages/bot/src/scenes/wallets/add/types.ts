import { Wallet } from '../../../types';

export interface AddWalletData {
  type: Wallet;
  number: string;
  token: string;
}
