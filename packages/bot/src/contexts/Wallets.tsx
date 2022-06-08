import React, { createContext, useContext } from 'react';
import { useAllWalletsQuery, WalletBaseFragment } from '@common_ubot/api-client';

interface Wallets {
  wallets: Array<WalletBaseFragment>;
  refetch: () => void;
}

const WalletsContext = createContext({} as Wallets);

type WalletsProviderProps = {
  children: React.ReactNode;
};

export const Wallets = ({ children }: WalletsProviderProps) => {
  const { data, refetch } = useAllWalletsQuery();

  if (!data?.allWallets) return null;

  const wallets = data?.allWallets;

  return <WalletsContext.Provider value={{ wallets, refetch }}>{children}</WalletsContext.Provider>;
};

export const useWallets = () => useContext(WalletsContext);
