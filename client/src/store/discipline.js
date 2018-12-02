import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';

/*
  Defaults
*/

const disciplineDefaults = {
  savedDiscipline: null,
};

/*
  GraphQL
*/

const disciplineQuery = gql`
  query GetDiscipline {
    savedDiscipline @client
  }
`;

/*
  Store
*/

/**
 * The Store object used to construct
 * Apollo Link State's Client State
 */
const store = {
  defaults: disciplineDefaults,
};

/*
  Helpers
*/

const disciplineQueryHandler = {
  props: ({ ownProps, data: { savedDiscipline = null } }) => ({
    ...ownProps,
    savedDiscipline,
  }),
};

const withDiscipline = compose(
  graphql(disciplineQuery, disciplineQueryHandler)
);

export { store, withDiscipline };
