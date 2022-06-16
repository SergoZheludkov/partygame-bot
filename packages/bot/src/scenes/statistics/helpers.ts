import { useTranslation } from '@common_ubot/i18n';

import * as T from '../../types';
import { PeriodTitle } from './types';

const getPeriodTitle = (period: T.Period, cb: ReturnType<typeof useTranslation>['t']): PeriodTitle => {
  switch (period) {
    case T.Period.DAY:
      return { title: cb('periods.daily') };
    case T.Period.YESTERDAY:
      return { title: cb('periods.yesterday') };
    case T.Period.WEEK:
      return { title: cb('periods.weekly') };
    case T.Period.MONTH:
      return { title: cb('periods.monthly') };
    case T.Period.ALL_TIME:
      return { title: cb('periods.all_time') };
    case T.Period.PERIOD:
      return { title: cb('periods.by_period') };
    default:
      return { title: cb('choose_period'), description: cb('period_example') };
  }
};

const getYear = (year: string) => {
  switch (year.length) {
    case 2:
      return `20${year}`;
    case 4:
      return year;
    default:
      return '2021';
  }
};

const getPeriod = (text: string): number[] =>
  text.split('-').map((date) => {
    const day = date.trim().slice(0, 2);
    const month = date.trim().slice(2, 4);
    const year = date.trim().slice(4);

    return Number(`${getYear(year)}${month}${day}`);
  });

const getValidateDate = (period: number[]): boolean => period.filter((date) => Number.isInteger(date)).length === 2;

export { getPeriod, getValidateDate, getPeriodTitle };
