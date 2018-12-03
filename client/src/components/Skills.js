import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Flex, Card, MessageBox, Spinner } from '@components';

const colors = {
  dark: 'lightskyblue',
  light: 'aliceblue',
};

const querySkills = gql`
  query Skills($id: String) {
    skills(id: $id) {
      id
      title
      details
    }
  }
`;

const Skills = props => {
  return (
    <Query query={querySkills} variables={{ id: 'software-engineering' }}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;

        if (error) {
          console.error(error);
          return (
            <MessageBox title="Error">Check console for details</MessageBox>
          );
        }

        const cards = data.skills.map(({ title, details }) => (
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

Skills.displayName = 'Skills';

Skills.propTypes = {
  role: PropTypes.object,
};

export default Skills;
