import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { Hook } from '../contexts';

interface Props {
  onWallets: () => void;
  onStatistic: () => void;
  onBack: () => void;
}

const Admin = ({ onWallets, onStatistic, onBack }: Props) => {
  const { t } = useTranslation('buttons');
  const { user } = Hook.useUser();

  useText(onWallets, t('wallets'));
  useText(onStatistic, t('statistic'));
  useText(onBack, t('back'));

  if (!user.is_admin) {
    return (
      <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('admin_menu:error')}>
        <Button>{t('back')}</Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('admin_menu:message')}>
      <Button>{t('wallets')}</Button>
      <Button>{t('statistic')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Admin };
