import React, { useEffect } from 'react';
import { Text, useBotContext } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { useUserQuery } from '@common_ubot/api-client';

interface AuthenticationProps {
  onSuccess: () => void;
  onFailed: () => void;
}

export const Authentification = ({ onSuccess, onFailed }: AuthenticationProps) => {
  const { t } = useTranslation();
  const { chat } = useBotContext();
  const { data, loading } = useUserQuery({ variables: { id: chat.id } });

  useEffect(() => {
    if (!loading && !data?.user) onFailed();
    if (!loading && data?.user) setTimeout(() => onSuccess(), 1000);
  }, [data]);

  if (!loading && data?.user) return <Text>{t('greeting')}</Text>;
  return null;
};
