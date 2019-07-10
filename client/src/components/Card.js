import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Box from './Box';
import Heading from './Heading';
import Text from './Text';
import { darken } from 'polished';
//import { themeGet } from 'styled-system';
//import sys from 'system-components';
//import { themeGet } from 'styled-system';

const Markdown = styled(Text)`
  font-size: 0.8em;
  line-height: 1.25em;
  & ul {
    padding-left: 8px;
    & li {
      margin: .5em 0;
      padding: 0;
      list-style-type: none;
      line-height: 1.25em;
    }
    & li:before {
      content: "- ";
      margin-left: -7px;
    }
  }
`;

const Card = ({ heading, text }) => {
  return (
    <Box m={[1]} width={[1]}>
      <Box height={'100%'} bg={darken(0.01,'aliceblue')}>
        <Box height={55} p={[2]} bg={darken(0.12, 'lightskyblue')}>
          <Heading color={'white'}>{heading}</Heading>
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
