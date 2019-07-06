import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Flex, Card, MessageBox, Spinner } from '@components';

const queryValues = gql`
  query Values($id: String) {
    values(id: $id) {
      id
      title
      details
    }
  }
`;

const Values = props => {
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

        const cards = data.values.map(({ title, details }) => (
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

Values.displayName = 'Values';

Values.propTypes = {
  role: PropTypes.object,
};

export default Values;
