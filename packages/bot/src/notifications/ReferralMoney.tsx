import React, { useEffect, useState } from 'react';
import { useBotContext, Text } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { useTranslation } from '@common_ubot/i18n';
import { messageBroker, ReferralMoneyData } from '../api';

interface ReferralMoneyState extends ReferralMoneyData {
  isShow: boolean;
}

const defaultState = {
  isShow: false,
  firstname: '',
  lastname: '',
  bonusMoney: NaN,
};

const ReferralMoney: React.FC = () => {
  const { t } = useTranslation('referral');
  const { chat, bot } = useBotContext<UrbanBotTelegram>();
  const [{ isShow, firstname, lastname, bonusMoney }, setState] = useState<ReferralMoneyState>(defaultState);

  const callback = (data: ReferralMoneyData) => setState({ ...data, isShow: true });

  useEffect(() => messageBroker.referralMoney(chat.id, callback), [bot.client, chat.id]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isShow) timeoutId = setTimeout(() => setState(defaultState), 500);

    return () => clearTimeout(timeoutId);
  }, [isShow]);

  if (isShow) {
    return (
      <Text>
        {t('notification.money_part1')}
        {bonusMoney}
        {t('notification.money_part2')}
        {`${firstname} ${lastname}`}
      </Text>
    );
  }

  return null;
};

export { ReferralMoney };
