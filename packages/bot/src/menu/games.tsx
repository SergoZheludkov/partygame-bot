import React from 'react';
import { ButtonGroup, Button, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  onHat: () => void;
}

const Games = ({ onHat }: Props) => {
  const { t } = useTranslation('buttons');

  useText(onHat, t('hat'));

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={t('games_menu:message')}>
      <Button>{t('hat')}</Button>
    </ButtonGroup>
  );
};

export { Games };
