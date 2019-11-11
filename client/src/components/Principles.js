import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Flex, Card, MessageBox, Spinner } from '@components';

const queryValues = gql`
  query Principles($id: String) {
    principles(id: $id) {
      id
      title
      details
    }
  }
`;

const Principles = props => {
  return (
    <Query query={queryValues} variables={{ id: 'software-engineering' }}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;

        if (error) {
          console.error(error);
          return (
            <MessageBox title="Error">Check console for details</MessageBox>
          );
        }

        const cards = data.principles.map(({ title, details }) => (
          <Card key={title} heading={title} text={details} />
        ));

        return (
          <Flex justifyContent="space-between" {...props}>
            {cards}
          </Flex>
        );
      }}
    </Query>
  );
};

Principles.displayName = 'Principles';

Principles.propTypes = {
  role: PropTypes.object,
};

export default Principles;
