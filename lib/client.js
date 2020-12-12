import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://api.blocktap.io/graphql'
});

// config from 
// https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-graphql/
let apolloClient;
function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache
  });
}
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient || createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
    return _apolloClient;
  }
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}