import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Card } from '@components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const input = `Small amount of experience in one area (application, service, domain, technology, stack,etc). Able to identify and communicate problems with technology; able to suggest improvements to existing technology and tools.

Example behaviours:

- Added a component to skweb
- Shipped a small feature in the iOS app
- Increased test coverage of a skweb page
- Found and filed a bug on skweb`;

const Layout = ({ role }) => {
  const { title, description, skills } = role;

  const cards = skills.map(({title, details}) => (<Card key={title} heading={title} text={details} />));

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
        <Box m={[2]} width={[1]}>
          Navigation
        </Box>
      </Flex>
      <Flex justifyContent="space-between">
        {cards}
      </Flex>
    </Flex>
  );
};

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
