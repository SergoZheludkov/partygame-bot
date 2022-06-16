import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { Hook } from '../contexts';

interface Props {
  onInputMoney: () => void;
  onAllPayments: () => void;
  onBack: () => void;
}

const Balance = ({ onInputMoney, onAllPayments, onBack }: Props) => {
  const { t } = useTranslation(['buttons', 'balance']);
  const { user } = Hook.useUser();

  useText(onInputMoney, t('input_money'));
  useText(onAllPayments, t('all_payments'));
  useText(onBack, t('back'));

  const message = (
    <>
      {t('common:balance')}
      &#32;
      <b>{user.balance}</b>
      &#32;$
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={message}>
      <Button>{t('input_money')}</Button>
      <Button>{t('all_payments')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Balance };
