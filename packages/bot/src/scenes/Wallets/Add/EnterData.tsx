import React from 'react';
import { Button, ButtonGroup, Dialog, DialogAnswers, DialogStep, Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

import { AddWalletData } from './types';
import { WALLET_TYPES } from '../../../constants';

interface Props {
  onEnterData: (data: AddWalletData[]) => void;
  onExit: () => void;
}

const EnterData = ({ onEnterData, onExit }: Props) => {
  const { t } = useTranslation(['wallets', 'buttons']);

  const onFinish = ({ type, meta }: DialogAnswers) => {
    const data = meta
      .split(';')
      .filter((m) => !!m)
      .map((wallet) => {
        const [phone, token] = wallet.split(':');
        return {
          type,
          number: phone.trim(),
          token: token.trim(),
        };
      }) as AddWalletData[];

    onEnterData(data);
  };

  const walletTypeMessage = (
    <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} maxColumns={1} title={t('type_message')}>
      <Button id="qiwi">{t('buttons:qiwi')}</Button>
      <Button onClick={onExit}>{t('buttons:back')}</Button>
    </ButtonGroup>
  );

  const metaMessage = (
    <Text>
      {t('meta.message')}
      <br />
      <br />
      <b>{t('meta.format')}</b>
      <br />
      <br />
      {t('meta.description')}
    </Text>
  );

  return (
    <Dialog onFinish={onFinish}>
      <DialogStep
        id="type"
        content={walletTypeMessage}
        validation={(type) => (!WALLET_TYPES.includes(type) ? (t('type_validation_error') as string) : undefined)}
      >
        <DialogStep
          id="meta"
          content={metaMessage}
          validation={(meta) => {
            const data = meta
              .split(';')
              .filter((m) => !!m)
              .map((wallet) => {
                const [phone, token] = wallet.split(':');
                return !(!Number.isNaN(Number(phone)) && token);
              });

            return data.some((bool) => bool) ? (t('meta.validation_error') as string) : undefined;
          }}
        />
      </DialogStep>
    </Dialog>
  );
};

export { EnterData };
