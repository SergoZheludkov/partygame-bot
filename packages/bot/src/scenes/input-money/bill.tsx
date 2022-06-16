import React, { useEffect } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { useCreatePaymentMutation, useOneWalletQuery, CreateOnePaymentInput } from '@common_ubot/api-client';

import { Wallet as TWallet } from '../../types';

interface BillProps {
  amount: number;
  walletType: TWallet;
  onCheck: (comment: string) => void;
}

const Bill = ({ amount, walletType, onCheck }: BillProps) => {
  const {
    chat: { id: user_id },
  } = useBotContext();
  const { t } = useTranslation(['input_money', 'buttons']);
  const { data: currentWallet } = useOneWalletQuery({ variables: { type: walletType } });
  const [createPaymentFC, { data: createPaymentData }] = useCreatePaymentMutation();

  useEffect(() => {
    if (createPaymentData || !currentWallet?.oneWallet) return;

    const { id: wallet_id } = currentWallet.oneWallet;
    const input: CreateOnePaymentInput['payment'] = {
      user_id,
      amount,
      wallet_id,
    };

    createPaymentFC({ variables: { input } });
  }, [currentWallet]);

  useEffect(() => {
    if (createPaymentData) onCheck(createPaymentData.createPayment.comment);
  }, [createPaymentData]);

  if (!createPaymentData) return null;

  const { comment, expected_amount, wallet } = createPaymentData.createPayment;
  const [usd, eur, rub, kzt] = expected_amount.split('/');

  return (
    <Text isRemoveKeyboard>
      <b>{t('bill')}</b>
      <br />
      <br />
      {t('transfer')}
      <br />
      {t('or')}
      {usd}
      &#32;$
      <br />
      {t('or')}
      {eur}
      &#32;€
      <br />
      {t('or')}
      {rub}
      &#32;₽
      <br />
      {t('or')}
      {kzt}
      &#32;₸
      <br />
      <br />
      {t('wallet_number')}
      <b>
        <i>{wallet.number}</i>
      </b>
      <br />
      <br />
      {t('warning')}
      <br />
      <br />
      <b>
        <i>{comment}</i>
      </b>
      <br />
      <br />
      {t('else')}
    </Text>
  );
};

export { Bill };
