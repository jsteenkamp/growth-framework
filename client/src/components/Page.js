import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading } from '@components';

const Page = ({ title, description, children }) => {
  return (
    <Flex flexDirection="column" m={[3]}>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" width={'66%'}>
          <Box m={[2]}>
            <Heading.h3>{title}</Heading.h3>
          </Box>
          <Box m={[2]}>
            <Heading.h6>{description}</Heading.h6>
          </Box>
        </Flex>
        <Box m={[2]} width={'33%'} />
      </Flex>
      <Box m={[2]}>{children}</Box>
    </Flex>
  );
};

Page.displayName = 'Page';

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
