import React, { useEffect, useState } from 'react';
import { useBotContext, ButtonGroup, Button, Text } from '@urban-bot/core';
import { useTranslation, Languages } from '@common_ubot/i18n';
import { useCreateUserMutation } from '@common_ubot/api-client';

interface RegistrationProps {
  refId: string | null;
  onExit: () => void;
}

export const Registration = ({ refId, onExit }: RegistrationProps) => {
  const { t, i18n } = useTranslation('lang');
  const { chat } = useBotContext();
  const [isReg, setReg] = useState(false);
  const [lang, setLang] = useState<Languages | null>(null);
  const [createUser] = useCreateUserMutation();

  // TODO перенести из useEffect в onClick
  useEffect(() => {
    if (lang) {
      (async () => {
        const user = await createUser({
          variables: {
            input: {
              id: chat.id,
              firstname: chat.firstName,
              lastname: chat.lastName,
              username: chat.username,
              who_invite: refId,
              lang,
            },
          },
        });

        if (!user) return;

        setReg(true);
        setTimeout(() => onExit(), 500);
        await i18n.changeLanguage(lang);
      })();
    }
  }, [lang]);

  const handleClick = (lng: Languages) => () => setLang(lng);

  if (isReg && lang) {
    return <Text>{t('success')}</Text>;
  }

  if (!isReg && !lang) {
    return (
      <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} title={t('message')}>
        <Button onClick={handleClick(Languages.RUSSIA)}>{t(Languages.RUSSIA)}</Button>
        <Button onClick={handleClick(Languages.ENGLISH)}>{t(Languages.ENGLISH)}</Button>
      </ButtonGroup>
    );
  }

  return null;
};
