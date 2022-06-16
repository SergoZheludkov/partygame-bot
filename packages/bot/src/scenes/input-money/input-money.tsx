import React, { useState } from 'react';
import { Amount } from './Amount';
import { WalletType } from './wallet-type';
import { Bill } from './bill';
import { Check } from './check';
import { Wallet as TWallet } from '../../types';

interface InputMoneyProps {
  onExit: () => void;
}

enum Scenes {
  AMOUNT = 'amount',
  WALLET = 'wallet',
  BILL = 'bill',
  CHECK = 'check',
}

interface State {
  scene: Scenes;
  comment: string;
  amount: number;
  walletType: TWallet;
}

const defaultState = {
  scene: Scenes.AMOUNT,
  comment: '',
  amount: 0,
  walletType: TWallet.NOOP,
};

const InputMoney = ({ onExit }: InputMoneyProps) => {
  /*
   * scene - текущий этап пополнения счета
   * comment - комментарий к платежу
   * amount - сумма пополнения в $
   * type - тип кошелька
   */
  const [{ scene, comment, amount, walletType }, setState] = useState<State>(defaultState);
  console.log('InputMoney scene:', scene);

  const handleAmountAdded = (_amount: number) => {
    const state = { scene: Scenes.WALLET, amount: _amount };
    setState((prev) => ({ ...prev, ...state }));
  };

  const handleWalletTypeAdded = (_walletType: TWallet) => {
    const state = { scene: Scenes.BILL, walletType: _walletType };
    setState((prev) => ({ ...prev, ...state }));
  };

  const handleBillSuccess = (_comment: string) => {
    const state = { scene: Scenes.CHECK, comment: _comment };
    setState((prev) => ({ ...prev, ...state }));
  };

  const reset = () => setState(defaultState);

  switch (scene) {
    case Scenes.AMOUNT:
      return <Amount onSuccess={handleAmountAdded} onBack={onExit} />;
    case Scenes.WALLET:
      return <WalletType onSuccess={handleWalletTypeAdded} onBack={reset} />;
    case Scenes.BILL:
      return <Bill amount={amount} walletType={walletType} onCheck={handleBillSuccess} />;
    case Scenes.CHECK:
      return <Check comment={comment} onBack={reset} onExit={onExit} />;
    default:
      return null;
  }
};

export { InputMoney };
