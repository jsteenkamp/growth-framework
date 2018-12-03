import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Heading } from '@components';

const Circle = styled.div`
  border-radius: 100%;
  text-align: center;
  display: block;
  height: 0;
  width: 100%;
  padding: 50% 0;
  background: lightskyblue;

  & > * {
    font-size: 0.8em;
    line-height: 1em;
  }
`;

const Wrapper = ({ title, text }) => (
  <Box my={[3]} width={'100%'} height={'100%'}>
    <Circle>
      <Flex
        height={'100%'}
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box />
        <Box width={'150px'} m={[2]}>
          <Heading.h5>{title}</Heading.h5>
        </Box>
        <Box width={'150px'} m={[2]}>
          {text}
        </Box>
        <Box />
      </Flex>
    </Circle>
  </Box>
);

const Values = props => {
  return (
    <Flex>
      <Wrapper
        title="We're better diverse"
        text="We embrace our differences. Great decisions come from fostering diverse perspectives, in a fair and inclusive environment."
      />
      <Wrapper
        title="Open and honest"
        text="Our workplace is an open, honest and flexible environment. We operate on trust, get the job done in our own way, and make room for life."
      />
      <Wrapper
        title="One team"
        text="We succeed and fail as a team. We empower each other with the skills, context and feedback we need to achieve our full potential. We don’t point fingers when there’s a problem, we work together to understand and solve it."
      />
      <Wrapper title="Customers first" text="We put the music fan at the centre of everything we do. We make their problems our problems. We live to serve." />
      <Wrapper title="Progress over perfection" text="JFDI - Just focus and do it is to have all the context you need to make quick, educated decisions. If we break things, we react, learn and improve." />
    </Flex>
  );
};

Values.displayName = 'Values';

Values.propTypes = {};

export default Values;
