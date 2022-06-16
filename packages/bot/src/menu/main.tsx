import React from 'react';
import { ButtonGroup, Button, useText, useCommand } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  onAdmin: () => void;
  onGames: () => void;
  onBalance: () => void;
  onReferral: () => void;
  onSettings: () => void;
  onFeedback: () => void;
  onRules: () => void;

  useMain: () => { message: string };
}

export const Main = ({
  onAdmin,
  onGames,
  onBalance,
  onReferral,
  onSettings,
  onFeedback,
  onRules,

  useMain,
}: Props) => {
  const { t } = useTranslation('buttons');
  const { message } = useMain();

  useCommand(onAdmin, '/admin');
  useText(onGames, t('games'));
  useText(onBalance, t('balance'));
  useText(onReferral, t('referral'));
  useText(onSettings, t('settings'));
  useText(onFeedback, t('feedback'));
  useText(onRules, t('rules'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t(message)}>
      <Button>{t('games')}</Button>
      <Button>{t('balance')}</Button>
      <Button>{t('referral')}</Button>
      <Button>{t('settings')}</Button>
      <Button>{t('feedback')}</Button>
      <Button>{t('rules')}</Button>
    </ButtonGroup>
  );
};
