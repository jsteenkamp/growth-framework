import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Layout, Spinner, MessageBox } from '@components';

const queryDiscipline = gql`
  query Discipline($id: String) {
    discipline(id: $id) {
      id
      title
      roles
    }
  }
`;

const Roles = ({ id }) => (
  <Query query={queryDiscipline} variables={{ id: 'software-engineering' }}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;

      if (error) {
        console.error(error);
        return <MessageBox title="Error">Check console for details</MessageBox>;
      }

      return <Layout role={data.discipline.roles[id]} />;
    }}
  </Query>
);

Roles.displayName = 'Roles';

Roles.propTypes = {
  id: PropTypes.string,
};

export default Roles;
