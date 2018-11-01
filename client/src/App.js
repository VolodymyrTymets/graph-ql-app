import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';


import Routes from './Routes';

import { getAuthToken } from './utils/authorization';

// import { client as AuthClient } from './modules/Auth';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : "",
  }
}));

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  // client schema
  // clientState: {
  //   defaults: {
  //     ...AuthClient.defaultState,
  //   },
  //   resolvers: {},
  //   Mutation: {},
  // },
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
