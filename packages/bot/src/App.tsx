import React from 'react';
import { getDefaultI18n, I18nProvider } from '@common_ubot/i18n';
import { ApiProvider } from '@common_ubot/api-client';
import { Bot } from './Bot';
import { Notifications } from './notifications';

const i18n = getDefaultI18n();
export const App = () => (
  <I18nProvider i18n={i18n}>
    <ApiProvider>
      <Bot />
      <Notifications />
    </ApiProvider>
  </I18nProvider>
);
