import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_ubot/i18n';
import { WalletBaseFragment, useSwitchWalletStatusMutation } from '@common_ubot/api-client';

import { getWallet } from '../../../utilits';
import { Hook } from '../../../contexts';

interface Props {
  onExit: () => void;
}

enum FilterState {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  ALL = 'all',
}

const SwitchWallets = ({ onExit }: Props) => {
  const { t } = useTranslation(['wallets', 'buttons']);
  const { wallets, refetch } = Hook.useWallets();
  const [switchWalletStatus] = useSwitchWalletStatusMutation();

  const [filter, setFilter] = useState<FilterState>(FilterState.ALL);
  const [WALLETS, setWallets] = useState<Array<WalletBaseFragment>>([]);

  useEffect(() => {
    switch (filter) {
      case FilterState.ENABLED:
        setWallets(wallets.filter(({ is_active }) => is_active));
        break;

      case FilterState.DISABLED:
        setWallets(wallets.filter(({ is_active }) => !is_active));
        break;

      default:
        setWallets(wallets);
    }
  }, [filter, wallets]);

  const handleFilterChange = (type: FilterState) => () => setFilter(type);

  const handleWalletClick = (id: number) => async () => {
    await switchWalletStatus({ variables: { id } });
    await refetch();
  };

  const filterButtons = wallets.length
    ? Object.values(FilterState).map((filterType) => (
        <Button key={filterType} onClick={handleFilterChange(filterType)}>
          {t(`buttons:${filterType}`)}
        </Button>
      ))
    : [];

  const walletButtons = wallets.length
    ? WALLETS.map(({ id, number, type, is_active }) => [
        <Button key={id} onClick={handleWalletClick(id)}>
          {`${is_active ? '🟢' : '🔴'} ${getWallet(type)} - ${number}`}
        </Button>,
      ])
    : [[<Button key="empty">{t('empty_wallets_list')}</Button>]];

  return (
    <ButtonGroup isResizedKeyboard isNewMessageEveryRender={false} title={t('management.message')}>
      {[
        filterButtons,
        ...walletButtons,
        [
          <Button key="back" onClick={onExit}>
            {t('buttons:back')}
          </Button>,
        ],
      ]}
    </ButtonGroup>
  );
};

export { SwitchWallets };
