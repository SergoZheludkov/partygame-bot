import React from 'react';
import { Button, ButtonGroup, Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  onBack: () => void;
}

const Settings = ({ onBack }: Props) => {
  const { t } = useTranslation('hat');

  return (
    <>
      <Text isRemoveKeyboard isNewMessageEveryRender={false}>
        {t('settings')}
      </Text>
      <ButtonGroup isRemoveKeyboard title={t('settings_description')} isNewMessageEveryRender={false}>
        <Button onClick={onBack}>{t('buttons:back')}</Button>
      </ButtonGroup>
    </>
  );
};

export { Settings };
