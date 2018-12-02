import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import createClientStore from './store';

// location.host includes port if specified
const { host, protocol } = window.location;
let GRAPHQL_ENDPOINT_URL = `http://${host}/graphql`;

// deployment should use SSL
if (protocol === 'https:') {
  GRAPHQL_ENDPOINT_URL = `https://${host}/graphql`;
}



const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT_URL,
  credentials: 'same-origin',
});


// add JWT token authorization to header
const authLink = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem('token');
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }));
  return forward(operation);
});

const cache = new InMemoryCache();
// local client state store (replaces redux)
const stateLink = createClientStore(cache);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.error(`[Network error]: ${networkError}`);
    }),
    stateLink,
    authLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

export default client;
