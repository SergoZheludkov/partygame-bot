import { useTranslation } from '@common_ubot/i18n';
import { Main } from '../main';

type UseCommonMainMenu = Parameters<typeof Main>[0]['useMain'];

const useCommonMainMenu: UseCommonMainMenu = () => {
  const { t } = useTranslation('common');

  return { message: t('main_menu') };
};

export { useCommonMainMenu };
