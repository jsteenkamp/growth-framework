import React from 'react';
import sys from 'system-components';
import { themeGet } from 'styled-system';

const Text = sys(
  {
    m: 0,
    lineHeight: 1,
  },
  props => ({
    color: `${themeGet('colors.primaryText')(props)}`,
  }),
  'color',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'space',
  'textAlign',
);

Text.displayName = 'Text';

Text.Subtitle1 = props => <Text {...props} fontSize={3} fontWeight={1} letterSpacing={0.15} />;
Text.Subtitle2 = props => <Text {...props} fontSize={2} fontWeight={2} letterSpacing={0.1} />;
Text.Body1 = props => <Text {...props} fontSize={3} fontWeight={1} letterSpacing={0.5} />;
Text.Body2 = props => <Text {...props} fontSize={2} fontWeight={1} letterSpacing={0.25} />;
Text.Caption = props => <Text {...props} fontSize={1} fontWeight={1} letterSpacing={0.4} />;
Text.Overline = props => <Text {...props} fontSize={0} fontWeight={1} letterSpacing={1.5} css='text-transform: uppercase;' />;

export default Text;
