import React, { useState } from 'react';
import { Settings } from './settings';

interface Props {
  onExit: () => void;
}

enum Scenes {
  SETTINGS = 'settings',
  ONE_DEVICE = 'one_device',
  SOME_DEVICES = 'some_devices',
}

interface State {
  scene: Scenes;
}

const defaultState = {
  scene: Scenes.SETTINGS,
};

const Hat = ({ onExit }: Props) => {
  /*
   * scene - текущий этап пополнения счета
   * comment - комментарий к платежу
   * amount - сумма пополнения в $
   * type - тип кошелька
   */
  const [{ scene }] = useState<State>(defaultState);
  console.log('hat game scene:', scene);

  // const reset = () => setState(defaultState);

  switch (scene) {
    case Scenes.SETTINGS:
      return <Settings onBack={onExit} />;

    default:
      return null;
  }
};

export { Hat };
