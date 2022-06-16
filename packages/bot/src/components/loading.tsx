import React, { useEffect, useState } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';

interface Props {
  isRemoveKeyboard?: boolean;
}

const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];

const Loading: React.FC<Props> = ({ isRemoveKeyboard }) => {
  const { t } = useTranslation('common');
  const [state, setState] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const isShow = state < clocks.length - 1;
    if (isShow) timeoutId = setTimeout(() => setState((prev) => prev + 1), 500);

    return () => clearTimeout(timeoutId);
  });

  return (
    <Text isNewMessageEveryRender={false} isRemoveKeyboard={isRemoveKeyboard}>
      {clocks[state]}
      &#32;
      {t('loading')}
    </Text>
  );
};

export { Loading };
