import React, { useState, useEffect } from 'react';
import { useCommand, useBotContext } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { saveChat, getChatsMap } from './local-storage';

import { Provider } from './contexts';

import * as Menu from './menu';
import * as Scene from './scenes';
import * as T from './types';

interface BotState {
  scene: T.Menu | T.Scene;
  statisticsType: T.Statistics;
}

const DEFAULT_STATE = { scene: T.Scene.RESET, statisticsType: T.Statistics.NONE };

export const Bot = () => {
  const [{ scene, statisticsType }, setState] = useState<BotState>(DEFAULT_STATE);
  const [refId, setRefId] = useState<string | null>('');
  console.info('Bot scene:', scene);

  const setScene = (_scene: BotState['scene']) => setState((prev) => ({ ...prev, scene: _scene }));
  const setStatistics = (type: T.Statistics) => setState({ scene: T.Scene.STATISTICS, statisticsType: type });

  const { chat } = useBotContext<UrbanBotTelegram>();

  useEffect(() => {
    const user = getChatsMap()[chat.id];
    if (!user) setScene(T.Scene.AUTH);
    else setScene(T.Scene.UPDATE_BOT);
  }, []);

  useEffect(() => {
    saveChat(chat);
  }, [chat]);

  useCommand(({ argument }) => {
    if (argument) setRefId(argument);
    setScene(T.Scene.AUTH);
  }, '/start');

  // menu handlers
  const handleMenuMain = () => setScene(T.Menu.MAIN);
  const handleMenuAdmin = () => setScene(T.Menu.ADMIN);
  const handleMenuGames = () => setScene(T.Menu.GAMES);
  const handleMenuBalance = () => setScene(T.Menu.BALANCE);
  const handleMenuWallets = () => setScene(T.Menu.WALLETS);
  const handleMenuReferral = () => setScene(T.Menu.REFERRAL);
  const handleMenuSettings = () => setScene(T.Menu.SETTINGS);
  const handleMenuStatistics = () => setState({ scene: T.Menu.STATISTICS, statisticsType: T.Statistics.NONE });

  // scene handlers
  const handleSceneHat = () => setScene(T.Scene.HAT);

  const handleSceneFeedback = () => setScene(T.Scene.FEEDBACK);
  const handleSceneRules = () => setScene(T.Scene.RULES);
  const handleSceneRegistration = () => setScene(T.Scene.REG);
  const handleSceneInputMoney = () => setScene(T.Scene.INPUT_MONEY);
  const handleSceneAllPayments = () => setScene(T.Scene.ALL_PAYMENTS);
  const handleSceneAddWallets = () => setScene(T.Scene.ADD_WALLETS);
  const handleSceneManagementWallets = () => setScene(T.Scene.MANAGEMENT_WALLETS);
  const handleSceneLanguage = () => setScene(T.Scene.LANGUAGE);
  const handleSceneNotifications = () => setScene(T.Scene.NOTIFICATIONS);

  // statistics handlers
  const handleStatisticsUsers = () => setStatistics(T.Statistics.USERS);
  const handleStatisticsPayments = () => setStatistics(T.Statistics.PAYMENTS);

  switch (scene) {
    case T.Scene.UPDATE_BOT:
      return (
        <Provider.User>
          <Menu.Main
            useMain={Menu.hooks.useUpdatedMain}
            onAdmin={handleMenuAdmin}
            onGames={handleMenuGames}
            onBalance={handleMenuBalance}
            onReferral={handleMenuReferral}
            onSettings={handleMenuSettings}
            onFeedback={handleSceneFeedback}
            onRules={handleSceneRules}
          />
        </Provider.User>
      );
    // -------------------------------------AUTHENTIFICATION-------------------------------------
    case T.Scene.AUTH:
      return <Scene.Authentification onSuccess={handleMenuMain} onFailed={handleSceneRegistration} />;
    case T.Scene.REG:
      return <Scene.Registration refId={refId || null} onExit={handleMenuMain} />;

    // ------------------------------------------GAMES------------------------------------------
    case T.Scene.HAT:
      return <Scene.Games.Hat onExit={handleMenuGames} />;
    // ----------------------------------------MAIN MENU----------------------------------------
    case T.Scene.INPUT_MONEY:
      return <Scene.InputMoney onExit={handleMenuBalance} />;

    case T.Scene.ALL_PAYMENTS:
      return <Scene.Payments onExit={handleMenuBalance} />;

    case T.Scene.FEEDBACK:
      return <Scene.Feedback onExit={handleMenuMain} />;

    case T.Scene.RULES:
      return <Scene.Rules onExit={handleMenuMain} />;
    // ----------------------------------------ADMIN MENU----------------------------------------
    case T.Scene.ADD_WALLETS:
      return <Scene.Wallets.Add onExit={handleMenuWallets} />;

    case T.Scene.MANAGEMENT_WALLETS:
      return (
        <Provider.Wallets>
          <Scene.Wallets.Management onExit={handleMenuWallets} />
        </Provider.Wallets>
      );

    case T.Scene.STATISTICS:
      return (
        <Provider.Statistics>
          <Scene.Statistics type={statisticsType} onExit={handleMenuStatistics} />
        </Provider.Statistics>
      );
    // ----------------------------------------SETTINGS----------------------------------------
    case T.Scene.LANGUAGE:
      return (
        <Provider.User>
          <Scene.Language onExit={handleMenuSettings} />
        </Provider.User>
      );

    case T.Scene.NOTIFICATIONS:
      return (
        <Provider.User>
          <Scene.Notifications onExit={handleMenuSettings} />
        </Provider.User>
      );
    // -----------------------------------------------------------------------------------------
    case T.Menu.MAIN:
      return (
        <Menu.Main
          useMain={Menu.hooks.useCommonMain}
          onAdmin={handleMenuAdmin}
          onGames={handleMenuGames}
          onBalance={handleMenuBalance}
          onReferral={handleMenuReferral}
          onSettings={handleMenuSettings}
          onFeedback={handleSceneFeedback}
          onRules={handleSceneRules}
        />
      );

    case T.Menu.ADMIN:
      return (
        <Provider.User>
          <Menu.Admin onWallets={handleMenuWallets} onStatistic={handleMenuStatistics} onBack={handleMenuMain} />
        </Provider.User>
      );

    case T.Menu.GAMES:
      return <Menu.Games onHat={handleSceneHat} />;

    case T.Menu.WALLETS:
      return (
        <Menu.Wallets
          onAdd={handleSceneAddWallets}
          onManagement={handleSceneManagementWallets}
          onBack={handleMenuAdmin}
        />
      );

    case T.Menu.STATISTICS:
      return (
        <Provider.Statistics>
          <Menu.Statistics
            onUsers={handleStatisticsUsers}
            onPayments={handleStatisticsPayments}
            onBack={handleMenuAdmin}
          />
        </Provider.Statistics>
      );

    case T.Menu.BALANCE:
      return (
        <Provider.User>
          <Menu.Balance
            onInputMoney={handleSceneInputMoney}
            onAllPayments={handleSceneAllPayments}
            onBack={handleMenuMain}
          />
        </Provider.User>
      );

    case T.Menu.REFERRAL:
      return (
        <Provider.User>
          <Menu.Referral onBack={handleMenuMain} />
        </Provider.User>
      );

    case T.Menu.SETTINGS:
      return (
        <Menu.Settings
          onLanguage={handleSceneLanguage}
          onNotifications={handleSceneNotifications}
          onBack={handleMenuMain}
        />
      );

    // -----------------------------------------------------------------------------------------

    default:
      return null;
  }
};
