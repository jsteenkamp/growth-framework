import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Card, Map } from '@components';

const Role = ({ role }) => {
  const { id, title, description, skills } = role;

  const cards = skills.map(({ title, details }) => (
    <Card key={title} heading={title} text={details} />
  ));

  return (
    <Flex flexDirection="column" my={[3]} mx={[5]}>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" width={'66%'}>
          <Box m={[2]}>
            <Heading.h3>{title}</Heading.h3>
          </Box>
          <Box m={[2]}>
            <Heading.h6>{description}</Heading.h6>
          </Box>
        </Flex>
        <Box m={[2]} width={'33%'}>
          <Map selected={id} labels={false} />
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
