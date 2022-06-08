import React, { useEffect, useRef } from 'react';
import { ButtonGroup, Button, Text, useText } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

import { Hook } from '../../contexts';

interface Props {
  onExit: () => void;
}

const Language = ({ onExit }: Props) => {
  const { t, i18n } = useTranslation(['lang']);
  const { language, languages, changeLanguage } = i18n;
  const setLang = useRef<string | null>(null);
  const { setLanguage } = Hook.useUser();

  useText(onExit, t('buttons:back'));

  useEffect(() => {
    setLang.current = language;
  }, []);

  const handleBackClick = () => {
    onExit();

    const { current: defLang } = setLang;
    if (defLang && language !== defLang) setLanguage(language);
  };

  const handleLanguageClick = (lang: string) => () => changeLanguage(lang);

  const langButtons = [...languages].sort().map((lang) => (
    <Button key={lang} onClick={handleLanguageClick(lang)}>
      {t(lang)}
    </Button>
  ));

  const title = `${t('main')} ${t(language)}`;
  return (
    <>
      <Text isNewMessageEveryRender={false} isRemoveKeyboard>
        {t('message')}
      </Text>
      <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} title={title}>
        {[
          langButtons,
          [
            <Button key="back" onClick={handleBackClick}>
              {t('buttons:back')}
            </Button>,
          ],
        ]}
      </ButtonGroup>
    </>
  );
};

export { Language };
