import React, { Fragment } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { isNotEmpty } from '@common_ubot/utilits';
import { StatisticsTypes } from '../../api';

const DailyStatistics: React.FC<StatisticsTypes> = ({ users, payments }) => {
  const { t } = useTranslation('statistics');

  const paymentsToRender = Object.entries(payments)
    .filter(([, data]) => isNotEmpty(data))
    .map(([wallet, { total, amount }]) => (
      <Fragment key={wallet}>
        <br />
        <br />
        {t(`buttons:${wallet}`)}
        <br />
        {t('total')}
        &#32;
        {total}
        <br />
        {t('amount')}
        &#32;
        {amount}
        &#32;$
      </Fragment>
    ));

  return (
    <Text isNewMessageEveryRender={false}>
      <b>{t('periods.daily')}</b>
      <br />
      <br />
      {t('new_users')}
      &#32;
      {users}
      <br />
      <br />
      {paymentsToRender.length ? (
        <>
          {t('payments')}
          {paymentsToRender}
        </>
      ) : (
        t('payments_is_empty')
      )}
    </Text>
  );
};

export { DailyStatistics };
