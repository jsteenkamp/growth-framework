import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text, Card } from '@components';

const Layout = ({ role }) => {
  const { title, description, skills } = role;

  const cards = skills.map(({ title, details }) => (
    <Card key={title} heading={title} text={details} />
  ));

  return (
    <Flex flexDirection="column" m={[3]}>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Box m={[2]}>
            <Heading.h3>{title}</Heading.h3>
          </Box>
          <Box m={[2]}>
            <Text>{description}</Text>
          </Box>
        </Flex>
        <Box m={[2]} width={[1]} bg={'#f8f8f8'} />
      </Flex>
      <Flex justifyContent="space-between">{cards}</Flex>
    </Flex>
  );
};

Layout.displayName = 'Layout';

Layout.propTypes = {
  role: PropTypes.object,
};

export default Layout;
