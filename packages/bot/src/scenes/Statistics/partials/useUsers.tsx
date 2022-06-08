import React from 'react';
import { useTranslation } from '@common_ubot/i18n';

import { StatisticsTypes } from '../../../api';
import { PeriodTitle } from '../types';

type Users = StatisticsTypes['users'];

const useUsersStatistics = () => {
  const { t } = useTranslation('statistics');

  const render = (period: PeriodTitle, users: Users) => {
    const { title, description } = period;

    return (
      <>
        <b>{title}</b>
        {description}
        <br />
        <br />
        {t('new_users')}
        &#32;
        {users}
      </>
    );
  };

  return { render };
};

export { useUsersStatistics };
