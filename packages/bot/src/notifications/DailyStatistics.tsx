import React, { useEffect, useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';

import { messageBroker, StatisticsTypes } from '../api';
import { DailyStatistics as DailyStatisticsComponent } from '../scenes/Statistics';

interface StatisticsState extends StatisticsTypes {
  isShow: boolean;
}

const defaultState = {
  isShow: false,
  users: 0,
  payments: {},
};

const DailyStatistics: React.FC = () => {
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{ isShow, users, payments }, setState] = useState<StatisticsState>(defaultState);

  const callback = (data: StatisticsTypes) => setState({ ...data, isShow: true });

  useEffect(() => messageBroker.dayStatistics(chat.id, callback), [bot.client, chat.id]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) timeoutId = setTimeout(() => setState(defaultState), 500);

    return () => clearTimeout(timeoutId);
  }, [isShow]);

  return isShow ? <DailyStatisticsComponent users={users} payments={payments} /> : null;
};

export { DailyStatistics };
