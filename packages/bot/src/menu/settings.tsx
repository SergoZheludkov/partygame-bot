import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  onLanguage: () => void;
  onNotifications: () => void;
  onBack: () => void;
}

const Settings = ({ onLanguage, onNotifications, onBack }: Props) => {
  const { t } = useTranslation(['buttons', 'common']);

  useText(onLanguage, t('languages'));
  useText(onNotifications, t('notifications'));
  useText(onBack, t('back'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('common:settings_menu')}>
      <Button>{t('languages')}</Button>
      <Button>{t('notifications')}</Button>
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Settings };
