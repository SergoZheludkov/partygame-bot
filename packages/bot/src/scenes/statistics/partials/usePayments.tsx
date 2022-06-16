import React, { Fragment } from 'react';
import { useTranslation } from '@common_ubot/i18n';
import { isNotEmpty } from '@common_ubot/utilits';

import { StatisticsTypes } from '../../../api';
import { PeriodTitle } from '../types';

type Payments = StatisticsTypes['payments'];

const usePaymentsStatistics = () => {
  const { t } = useTranslation('statistics');

  const getPaymentsToRender = (payments: Payments) =>
    Object.entries(payments)
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

  const render = (period: PeriodTitle, payments: Payments) => {
    const paymentsToRender = getPaymentsToRender(payments);
    const { title, description } = period;

    return (
      <>
        <b>{title}</b>
        {description}
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
      </>
    );
  };

  return { render };
};

export { usePaymentsStatistics };
