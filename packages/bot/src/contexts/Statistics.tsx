import React, { createContext, useContext } from 'react';
import { useStatisticsByLazyQuery } from '@common_ubot/api-client';
import { getIdFromDate } from '@common_ubot/utilits';
import { endOfMonth, endOfWeek, startOfMonth, startOfWeek, startOfYesterday } from 'date-fns';

import { Period, StatisticsToggles } from '../types';
import { StatisticsTypes } from '../api';

interface PeriodStatistics extends StatisticsToggles {
  startDate: number;
  endDate: number;
}

interface StatisticsData extends StatisticsTypes {
  period: Period;
}

interface Statistics {
  statistics: StatisticsData | null;
  getDailyStatistics: () => void;
  getYesterdayStatistics: (params: StatisticsToggles) => void;
  getWeeklyStatistics: (params: StatisticsToggles) => void;
  getMonthlyStatistics: (params: StatisticsToggles) => void;
  getAllTimeStatistics: (params: StatisticsToggles) => void;
  getPeriodStatistics: (params: PeriodStatistics) => void;
  refetch: () => void;
}

const StatisticsContext = createContext({} as Statistics);

type StatisticsProviderProps = {
  children: React.ReactNode;
};

export const Statistics = ({ children }: StatisticsProviderProps) => {
  const [getStatisticsBy, { data, refetch }] = useStatisticsByLazyQuery();
  const today = new Date();

  const getDailyStatistics = () => {
    const variables = { users: true, payments: true, period: Period.DAY };
    getStatisticsBy({ variables });
  };

  const getYesterdayStatistics = ({ users, payments }: StatisticsToggles) => {
    const yesterday = getIdFromDate(startOfYesterday());
    const variables = { users, payments, startDate: yesterday, endDate: yesterday, period: Period.YESTERDAY };
    getStatisticsBy({ variables });
  };

  const getWeeklyStatistics = ({ users, payments }: StatisticsToggles) => {
    const startDate = getIdFromDate(startOfWeek(today));
    const endDate = getIdFromDate(endOfWeek(today));
    const variables = { users, payments, startDate, endDate, period: Period.WEEK };
    getStatisticsBy({ variables });
  };

  const getMonthlyStatistics = ({ users, payments }: StatisticsToggles) => {
    const startDate = getIdFromDate(startOfMonth(today));
    const endDate = getIdFromDate(endOfMonth(today));
    const variables = { users, payments, startDate, endDate, period: Period.MONTH };
    getStatisticsBy({ variables });
  };

  const getAllTimeStatistics = ({ users, payments }: StatisticsToggles) => {
    const startDate = getIdFromDate(new Date(2021, 0, 1));
    const endDate = getIdFromDate(startOfYesterday());
    const variables = { users, payments, startDate, endDate, period: Period.ALL_TIME };
    getStatisticsBy({ variables });
  };

  const getPeriodStatistics = ({ users, payments, startDate, endDate }: PeriodStatistics) => {
    const variables = { users, payments, startDate, endDate, period: Period.PERIOD };
    getStatisticsBy({ variables });
  };

  const statistics = data?.statisticsBy
    ? {
        users: data?.statisticsBy?.users || 0,
        payments: (data?.statisticsBy?.payments as unknown as StatisticsTypes['payments']) || {},
        period: (data?.statisticsBy?.period as Period) || Period.NONE,
      }
    : null;

  return (
    <StatisticsContext.Provider
      value={{
        statistics,
        getDailyStatistics,
        getYesterdayStatistics,
        getWeeklyStatistics,
        getMonthlyStatistics,
        getAllTimeStatistics,
        getPeriodStatistics,
        refetch,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

export const useStatistics = () => useContext(StatisticsContext);
