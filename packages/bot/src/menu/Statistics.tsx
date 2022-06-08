import React, { useEffect } from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { DailyStatistics } from '../scenes/Statistics';
import { Hook } from '../contexts';

interface Props {
  onUsers: () => void;
  onPayments: () => void;
  onBack: () => void;
}

const Statistics = ({ onUsers, onPayments, onBack }: Props) => {
  const { t } = useTranslation(['buttons', 'statistics']);
  const { statistics, getDailyStatistics } = Hook.useStatistics();

  useEffect(() => getDailyStatistics(), []);

  useText(onUsers, t('users'));
  useText(onPayments, t('payments'));
  useText(onBack, t('back'));

  if (!statistics) return null;

  return (
    <>
      <DailyStatistics users={statistics.users} payments={statistics.payments} />
      <ButtonGroup
        isNewMessageEveryRender={false}
        isReplyButtons
        isResizedKeyboard
        maxColumns={2}
        title={t('statistics:more_details')}
      >
        <Button>{t('users')}</Button>
        <Button>{t('payments')}</Button>
        <Button>{t('back')}</Button>
      </ButtonGroup>
    </>
  );
};

export { Statistics };
