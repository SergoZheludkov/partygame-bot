import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_ubot/i18n';
import { messageBroker, NotificationData } from '../api';

interface NotificationState extends NotificationData {
  isShow: boolean;
}

const defaultState = {
  isShow: false,
  message: '',
};

const Notification: React.FC = () => {
  const { t } = useTranslation('common');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{ isShow, message }, setState] = useState<NotificationState>(defaultState);

  const callback = (data: NotificationData) => setState({ ...data, isShow: true });

  useEffect(() => messageBroker.notification(chat.id, callback), [bot.client, chat.id]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) timeoutId = setTimeout(() => setState(defaultState), 500);

    return () => clearTimeout(timeoutId);
  }, [isShow]);

  if (!isShow) return null;
  return <Text>{message || t('default_notification_message')}</Text>;
};

export { Notification };
