import React from 'react';
import { Button, ButtonGroup, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

import { Hook } from '../../contexts';
import * as T from '../../types';
import { useStatistics } from './use-statistics';
import { getPeriod, getValidateDate } from './helpers';

interface DetailedStatisticsProps {
  type: T.Statistics;
  onExit: () => void;
}

const DATE_PERIOD = /^(\d{6}|\d{8})(\s?)*-(\s?)*(\d{6}|\d{8})$/gm; // period format: ddMMyy-ddMMyy | ddMMyyyy - ddMMyyyy

const Statistics: React.FC<DetailedStatisticsProps> = ({ type, onExit }) => {
  const { t } = useTranslation(['statistics', 'buttons']);
  const { getTitle } = useStatistics();

  const {
    getYesterdayStatistics,
    getWeeklyStatistics,
    getMonthlyStatistics,
    getAllTimeStatistics,
    getPeriodStatistics,
  } = Hook.useStatistics();

  useText(({ text }) => {
    const period = getPeriod(text);

    if (getValidateDate(period)) {
      const [startDate, endDate] = period;
      getPeriodStatistics({ [type]: true, startDate, endDate });
    }
  }, DATE_PERIOD);

  const handleAllTimeClick = () => getAllTimeStatistics({ [type]: true });
  const handleMonthlyClick = () => getMonthlyStatistics({ [type]: true });
  const handleWeeklyClick = () => getWeeklyStatistics({ [type]: true });
  const handleYesterdayClick = () => getYesterdayStatistics({ [type]: true });

  const buttons = [
    [
      <Button key="allTime" onClick={handleAllTimeClick}>
        {t('buttons:all_time')}
      </Button>,
      <Button key="monthly" onClick={handleMonthlyClick}>
        {t('buttons:month')}
      </Button>,
      <Button key="weekly" onClick={handleWeeklyClick}>
        {t('buttons:week')}
      </Button>,
      <Button key="yesterday" onClick={handleYesterdayClick}>
        {t('buttons:yesterday')}
      </Button>,
    ],
    [
      <Button key="exit" onClick={onExit}>
        {t('buttons:exit')}
      </Button>,
    ],
  ];

  return (
    <ButtonGroup isNewMessageEveryRender={false} title={getTitle(type)}>
      {buttons}
    </ButtonGroup>
  );
};

export { Statistics };
