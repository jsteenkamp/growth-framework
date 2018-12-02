import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text, Card, Map } from '@components';

const Role = ({ role }) => {
  const { title, description, order, skills } = role;

  const cards = skills.map(({ title, details }) => (
    <Card key={title} heading={title} text={details} />
  ));

  return (
    <Flex flexDirection="column" m={[3]}>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" width={'66%'}>
          <Box m={[2]}>
            <Heading.h3>{title}</Heading.h3>
          </Box>
          <Box m={[2]}>
            <Text>{description}</Text>
          </Box>
        </Flex>
        <Box m={[2]} width={'33%'}>
          <Map selected={order} />
        </Box>
      </Flex>
      <Flex justifyContent="space-between">{cards}</Flex>
    </Flex>
  );
};

Role.displayName = 'Role';

Role.propTypes = {
  role: PropTypes.object,
};

export default Role;
