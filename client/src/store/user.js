import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';

/*
  Defaults
*/

const userDefaults = {
  savedUser: null,
};

/*
  GraphQL
*/

const userQuery = gql`
  query GetUser {
    savedUser @client
  }
`;

const clearUserQuery = gql`
  mutation clearUser {
    clearUser @client
  }
`;

const updateUserQuery = gql`
  mutation updateUser($id: String, $username: String, $roles: [String]) {
    updateUser(id: $id, username: $username, roles: $roles) @client
  }
`;

/*
  Cache Mutations
*/

const updateUser = (_obj, { id, username, roles }, { cache }) => {
  cache.writeQuery({
    query: userQuery,
    data: { savedUser: { id, username, roles } },
  });
  return null;
};

const clearUser = (_obj, _args, { cache }) => {
  cache.writeQuery({ query: userQuery, data: userDefaults });
  return null;
};

/*
  Store
*/

/**
 * The Store object used to construct
 * Apollo Link State's Client State
 */
const store = {
  defaults: userDefaults,
  mutations: {
    updateUser,
    clearUser,
  },
};

/*
  Helpers
*/

const userQueryHandler = {
  props: ({ ownProps, data: { savedUser = null } }) => ({
    ...ownProps,
    savedUser,
  }),
};

const withUser = compose(
  graphql(userQuery, userQueryHandler),
  graphql(updateUserQuery, { name: 'updateUserMutation' }),
  graphql(clearUserQuery, { name: 'clearUserMutation' })
);

export { store, withUser };
