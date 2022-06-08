import gql from 'graphql-tag';

export const WALLET_FRAGMENT = gql`
  fragment WalletBase on Wallet {
    id
    number
    type
    is_active
  }
`;

export const ONE_WALLET = gql`
  query oneWallet($type: String!) {
    oneWallet(type: $type) {
      ...WalletBase
    }
  }
`;

export const ALL_WALLET = gql`
  query allWallets {
    allWallets {
      ...WalletBase
    }
  }
`;

export const ADD_WALLETS = gql`
  mutation addWallets($input: [WalletCreate!]!) {
    addWallets(input: $input) {
      status
    }
  }
`;

export const SWITCH_WALLET_STATUS = gql`
  mutation switchWalletStatus($id: Float!) {
    switchWalletStatus(id: $id) {
      status
    }
  }
`;
