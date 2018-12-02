import React from 'react';
import PropTypes from 'prop-types';
import { Box, TouchIcon, Heading, Flex } from '@components';

const Header = ({ toggle, children }) => (
  <Box borderBottom={'1px solid'} borderColor="primaryColor">
    <Flex alignItems="center">
      <Box>
        <TouchIcon type="feather-menu" onClick={toggle} />
      </Box>
      <Box><Heading color="primaryLightText">Syft-SSP</Heading></Box>
      <Box mr="auto">
        <Heading>{children}</Heading>
      </Box>
    </Flex>
  </Box>
);

Header.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toggle: PropTypes.func,
  showClose: PropTypes.bool,
  children: PropTypes.node,
};

Header.displayName = 'Header';

export default Header;