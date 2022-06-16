import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  onExit: () => void;
}

const Rules = ({ onExit }: Props) => {
  const { t } = useTranslation(['rules']);

  useText(onExit, t('buttons:back'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard title={t('message')}>
      <Button>{t('buttons:back')}</Button>
    </ButtonGroup>
  );
};

export { Rules };
