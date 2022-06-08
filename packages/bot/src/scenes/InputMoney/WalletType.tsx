import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { Wallet as TWallet } from '../../types';

interface WalletProps {
  onSuccess: (wallet: TWallet) => void;
  onBack: () => void;
}

const WalletType = ({ onSuccess, onBack }: WalletProps) => {
  const { t } = useTranslation(['buttons', 'input_money']);

  useText(() => onSuccess(TWallet.QIWI), t('qiwi'));
  // useText(() => success(TWallet.YOO_MONEY), t('yoomoney')); // deprecated
  useText(onBack, t('back'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={1} title={t('input_money:wallet')}>
      <Button>{t('qiwi')}</Button>
      {/* <Button>{t('yoomoney')}</Button> */}
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { WalletType };
