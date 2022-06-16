import React from 'react';
import { ButtonGroup, Button, Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { useNotificationsSettings } from './use-notifications';
import { SaveStatuses } from './types';

interface Props {
  onExit: () => void;
}

const SAVE_BUTTONS: Record<SaveStatuses, string> = {
  [SaveStatuses.SUCCESS]: 'saved',
  [SaveStatuses.FAILURE]: 'error',
  [SaveStatuses.NONE]: 'confirm',
};

const Notifications = ({ onExit }: Props) => {
  const { t } = useTranslation(['buttons', 'notifications']);
  const { time, status, handleLess, handleMore, handleSwitch, handleSave } = useNotificationsSettings();

  const hours = String(Math.floor(time / 60));
  const minutes = String(time % 60).padStart(2, '0');
  const displayTime = `⏰ ${hours}:${minutes}`;
  const title = t('notifications:message');

  const firstLine = time
    ? [
        <Button onClick={handleLess} key="less">
          {t('less')}
        </Button>,
        <Button key="time">{time ? displayTime : t('off')}</Button>,
        <Button onClick={handleMore} key="more">
          {t('more')}
        </Button>,
      ]
    : [];

  const secondLine = [
    <Button onClick={handleSwitch} key="On/Off">
      {t(`notifications${time ? 'Off' : 'On'}`)}
    </Button>,
  ];

  const thirdLine = [
    <Button onClick={status === SaveStatuses.NONE ? handleSave : undefined} key="confirm">
      {t(`${SAVE_BUTTONS[status]}`)}
    </Button>,
    <Button onClick={onExit} key="back">
      {t('back')}
    </Button>,
  ];

  const buttons = (
    <ButtonGroup isRemoveKeyboard title={title} isNewMessageEveryRender={false}>
      {[firstLine, secondLine, thirdLine]}
    </ButtonGroup>
  );

  return (
    <>
      <Text isRemoveKeyboard isNewMessageEveryRender={false}>
        {t('notifications:about')}
      </Text>
      {buttons}
    </>
  );
};

export { Notifications };
