import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  onAdd: () => void;
  onManagement: () => void;
  onBack: () => void;
}

const Wallets = ({ onAdd, onManagement, onBack }: Props) => {
  const { t } = useTranslation(['buttons', 'wallets']);

  useText(onAdd, t('add_wallets'));
  useText(onManagement, t('management_wallets'));
  useText(onBack, t('back'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('wallets:message')}>
      <Button>{t('add_wallets')}</Button>
      <Button>{t('management_wallets')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Wallets };
