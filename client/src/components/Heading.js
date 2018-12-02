import React from 'react';
import sys from 'system-components';
import { themeGet } from 'styled-system';

const Heading = sys(
  {
    is: 'h6',
    fontSize: 4,
    fontWeight: 0,
    lineHeight: 1,
    letterSpacing: 0.25,
    m: 0,
  },
  props => ({
    color: `${themeGet('colors.primaryText')(props)}`,
  }),
  'color',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'space',
  'textAlign',
);

Heading.displayName = 'Heading';

Heading.h1 = props => <Heading {...props} is="h1" fontSize={9} fontWeight={0} letterSpacing={-1.5} />;
Heading.h2 = props => <Heading {...props} is="h2" fontSize={8} fontWeight={0} letterSpacing={-0.5} />;
Heading.h3 = props => <Heading {...props} is="h3" fontSize={7} fontWeight={0} letterSpacing={0} />;
Heading.h4 = props => <Heading {...props} is="h4" fontSize={6} fontWeight={0} letterSpacing={0.25} />;
Heading.h5 = props => <Heading {...props} is="h5" fontSize={5} fontWeight={0} letterSpacing={0} />;
Heading.h6 = props => <Heading {...props} is="h6" fontSize={4} fontWeight={0} letterSpacing={0.15} />;

export default Heading;
