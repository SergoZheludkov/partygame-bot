import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { useCheckPaymentMutation, CheckPaymentInput } from '@common_ubot/api-client';

interface CheckProps {
  comment: string;
  onBack: () => void;
  onExit: () => void;
}

interface CheckState {
  canCheck: boolean;
  timer: number;
}

const checkPeriod = 60; // в секундах

const defaultCheckState = { canCheck: true, timer: 0 };

const Check = ({ comment, onBack, onExit }: CheckProps) => {
  const { t } = useTranslation(['input_money', 'buttons']);
  const [checkPaymentFC, { data: updatedPaymentData }] = useCheckPaymentMutation();
  const [{ canCheck, timer }, setCanCheck] = useState<CheckState>(defaultCheckState);
  const input: CheckPaymentInput = { comment };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (timer > 1) {
      timeoutId = setTimeout(() => {
        setCanCheck(({ timer: time }) => ({ canCheck: false, timer: time - 1 }));
      }, 1000);
    }

    if (timer === 1) {
      timeoutId = setTimeout(() => {
        setCanCheck({ canCheck: true, timer: 0 });
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [timer]);

  const checkPayment = async () => {
    await checkPaymentFC({ variables: { input } });
    setCanCheck({ canCheck: false, timer: checkPeriod });
  };

  // Первое сообщение
  if (!updatedPaymentData) {
    return (
      <ButtonGroup isResizedKeyboard maxColumns={1} title={t('update_message')} isNewMessageEveryRender={false}>
        <Button onClick={checkPayment}>{t('buttons:check_payment')}</Button>
        <Button onClick={onBack}>{t('buttons:back')}</Button>
      </ButtonGroup>
    );
  }

  // Неудачная проверка оплаты
  if (!updatedPaymentData.checkPayment.is_paid) {
    const message = (
      <>
        <b>{t('check_failed')}</b>
        <br />
        {t('write_to_support')}
        {!canCheck && (
          <>
            <br />
            {`${t('next_check')} ${timer} ${t('sec')}`}
          </>
        )}
      </>
    );

    return (
      <ButtonGroup isResizedKeyboard maxColumns={1} title={message} isNewMessageEveryRender={false}>
        {canCheck && <Button onClick={checkPayment}>{t('buttons:check_payment')}</Button>}
        <Button onClick={onBack}>{t('buttons:back')}</Button>
      </ButtonGroup>
    );
  }

  // Удачная проверка оплаты
  if (updatedPaymentData.checkPayment.is_paid) {
    const [usd] = updatedPaymentData.checkPayment.expected_amount.split('/');
    const message = (
      <>
        {t('check_success')}
        <br />
        {t('balance')}
        <b>{usd}</b>
        &#32;$
      </>
    );

    return (
      <ButtonGroup isResizedKeyboard maxColumns={1} title={message} isNewMessageEveryRender={false}>
        <Button onClick={onExit}>{t('buttons:back')}</Button>
      </ButtonGroup>
    );
  }

  return null;
};

export { Check };
