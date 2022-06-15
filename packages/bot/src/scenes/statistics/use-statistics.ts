import { useTranslation } from '@common_ubot/i18n';
import { usePayments, useUsers } from './partials';
import { getPeriodTitle } from './helpers';

import { Hook } from '../../contexts';
import * as T from '../../types';

const useStatistics = () => {
  const { t } = useTranslation(['statistics', 'buttons']);
  const paymentsStatistics = usePayments();
  const usersStatistics = useUsers();

  const { statistics } = Hook.useStatistics();

  const getTitle = (type: T.Statistics) => {
    if (type === T.Statistics.PAYMENTS && statistics?.payments) {
      return paymentsStatistics.render(getPeriodTitle(statistics.period, t), statistics.payments);
    }

    const isUsersCount = Number.isInteger(Number(statistics?.users));
    if (type === T.Statistics.USERS && statistics && isUsersCount) {
      return usersStatistics.render(getPeriodTitle(statistics.period, t), statistics.users);
    }

    return getPeriodTitle(statistics?.period || T.Period.NONE, t);
  };

  return { getTitle };
};

export { useStatistics };
