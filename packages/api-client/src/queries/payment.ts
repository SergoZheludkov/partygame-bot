import gql from 'graphql-tag';

export const ALL_PAYMENT = gql`
  query allPayment($id: String!) {
    getUserPayments(id: $id) {
      currency
      amount
      expected_amount
      comment
      updated
      wallet {
        id
        number
        type
      }
    }
  }
`;

export const CREATE_PAYMENT = gql`
  mutation createPayment($input: PaymentCreate!) {
    createPayment(input: $input) {
      user_id
      wallet_id
      amount
      expected_amount
      currency
      comment
      wallet {
        id
        number
        type
      }
    }
  }
`;

export const CHECK_PAYMENT = gql`
  mutation checkPayment($input: CheckPaymentInput!) {
    checkPayment(input: $input) {
      user_id
      wallet_id
      currency
      amount
      expected_amount
      is_paid
      wallet {
        id
        number
        type
      }
    }
  }
`;
