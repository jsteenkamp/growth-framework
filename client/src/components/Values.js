import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from '@components';

const Circle = styled.div`
  border-radius: 100%;
  text-align: center;
  display: block;
  height: 0;
  width: 100%;
  padding: 50% 0;
  background: lightskyblue;

  & > * {
    margin: -0.5em 1em 0;
    line-height: 1em;
  }
`;

const Values = props => {
  return (
    <Flex>
      <Box my={[3]} width={'250px'} height={'250px'}>
        <Circle>
          <p>Circle with text that will wrap when it gets very long</p>
        </Circle>
      </Box>
      <Box my={[4]} width={'250px'} height={'250px'}>
        <Circle>
          <p>Circle with text that will wrap when it gets very long</p>
        </Circle>
      </Box>
    </Flex>
  );
};

Values.displayName = 'Values';

Values.propTypes = {};

export default Values;
