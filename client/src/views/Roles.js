import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Role, Spinner, MessageBox } from '@components';

const queryRoles = gql`
    query Roles($id: String) {
        roles(id: $id) {
            id
            title
            description
            skills
        }
    }
`;

const Roles = ({ id }) => (
  <Query query={queryRoles} variables={{ id: 'software-engineering' }}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;

      if (error) {
        console.error(error);
        return <MessageBox title="Error">Check console for details</MessageBox>;
      }

      const role = data.roles.find(role => role.id === id);

      return <Role role={role} />;
    }}
  </Query>
);

Roles.displayName = 'Roles';

Roles.propTypes = {
  id: PropTypes.string,
};

export default Roles;
