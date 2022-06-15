import React, { useState } from 'react';
import { ButtonGroup, Button, Text, useText, useBotContext } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { Hook } from '../contexts';

interface Props {
  onBack: () => void;
}

interface State {
  inviteIsShowed: boolean;
  moneyIsShowed: boolean;
}

const BOT_NAME = 'party_games_bot';

const nothingShown = { inviteIsShowed: false, moneyIsShowed: false };
const inviteShowed = { inviteIsShowed: true, moneyIsShowed: false };
const moneyShowed = { inviteIsShowed: false, moneyIsShowed: true };

// TODO сделать перевод по запросу
const Referral = ({ onBack }: Props) => {
  const { t } = useTranslation(['buttons', 'referral', 'invite']);
  const { chat } = useBotContext();
  const [{ inviteIsShowed, moneyIsShowed }, setShowed] = useState<State>(nothingShown);
  const { user } = Hook.useUser();

  useText(() => setShowed(inviteShowed), t('invite'));
  useText(() => setShowed(moneyShowed), t('output_money'));
  useText(onBack, t('back'));

  if (inviteIsShowed) {
    const inviteLink = `https://t.me/${BOT_NAME}?start=${chat.id}`;
    return (
      <>
        <Text>
          <b>{t('invite:title')}</b>
        </Text>
        <Text simulateTyping={2000}>
          {t('invite:message')}
          <br />
          <br />
          <a href={inviteLink}>{inviteLink}</a>
        </Text>
      </>
    );
  }

  if (moneyIsShowed) {
    return <Text>{t('output_money:message')}</Text>;
  }

  const message = (
    <>
      {t('referral:title')}
      <br />
      <br />
      {t('referral:message')}
      <br />
      <br />
      {t('referral:balance')}
      <b>{user.referral_money}</b>
      &#32;$
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={message}>
      <Button>{t('invite')}</Button>
      <Button>{t('output_money')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Referral };
