import React from 'react';
import { ApolloClient, DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import fetch from 'node-fetch';
import { ApolloProvider } from '@apollo/react-hooks';
import { createUploadLink } from 'apollo-upload-client';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const httpLink = createUploadLink({
  uri: 'http://127.0.0.1:4200/graphql',
  fetch,
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions,
});

export * from './generated';

type ShopProviderProps = {
  children: React.ReactNode;
};

export function ApiProvider({ children }: ShopProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export { ExecutionResult } from '@apollo/react-common';
