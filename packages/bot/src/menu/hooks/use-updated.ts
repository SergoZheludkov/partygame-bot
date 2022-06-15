import { useEffect } from 'react';
import { useTranslation } from '@common_ubot/i18n';

import { Hook } from '../../contexts';
import { Main } from '../main';

type UseUpdatedMainMenu = Parameters<typeof Main>[0]['useMain'];

const useUpdatedMainMenu: UseUpdatedMainMenu = () => {
  const { t, i18n } = useTranslation('common');
  const { user } = Hook.useUser();

  useEffect(() => {
    i18n.changeLanguage(user.lang);
  }, []);

  return { message: t('update_message') };
};

export { useUpdatedMainMenu };
