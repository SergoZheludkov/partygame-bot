import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
  fragment UserBase on User {
    id
    firstname
    lastname
    username
    balance
    who_invite
    referral_counter
    referral_money
    is_admin
    lang
    reminder_time
  }
`;

export const USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      ...UserBase
    }
  }
`;

export const POST_USER = gql`
  mutation createUser($input: UserCreate!) {
    createUser(input: $input) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($input: UpdateOneUserInput!) {
    updateOneUser(input: $input) {
      id
    }
  }
`;
