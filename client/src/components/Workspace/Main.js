import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// allow scrolling of Main panel
const Box = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => `calc(100% - ${props.top}px)`};
  overflow: hidden;
  overflow-y: auto;
`;

const Main = ({ top, children }) => {
  return <Box top={top}>{children}</Box>;
};

Main.displayName = 'Main';

Main.propTypes = {
  top: PropTypes.number,
  children: PropTypes.node,
};

export default Main;