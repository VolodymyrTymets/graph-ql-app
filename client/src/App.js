import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Routes from './Routes';
import { getAuthToken } from './utils/authorization';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = getAuthToken();
  return ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  })
});


const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes apolloClient={client}/>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
