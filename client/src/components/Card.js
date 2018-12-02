import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Box from './Box';
import Heading from './Heading';
import Text from './Text';
//import { themeGet } from 'styled-system';
//import sys from 'system-components';
//import { themeGet } from 'styled-system';

const Markdown = styled(Text)`
  font-size: 0.75em;
  & ul {
    padding-left: 16px;
    & li {
      margin: 0;
      padding: 0;
    }
  }
`;

const Card = ({ heading, text }) => {
  return (
    <Box m={[1]} width={[1]}>
      <Box height={'100%'} bg={'aliceblue'}>
        <Box height={55} p={[2]} bg={'lightskyblue'}>
          <Heading>{heading}</Heading>
        </Box>
        <Box p={[2]} mt={'-12px'}>
          <Markdown>
            <ReactMarkdown source={text} />
          </Markdown>
        </Box>
      </Box>
    </Box>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string
};

export default Card;
