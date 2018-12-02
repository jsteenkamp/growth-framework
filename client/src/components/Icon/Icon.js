import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _isNumber from 'lodash/isNumber';

// Generate sprite sheet http://varun.ca/icon-component/ and https://webpack.js.org/guides/dependency-management/#require-context
const importAll = r => r.keys().forEach(r);
// Sprite sheet is written to document body
importAll(require.context('!svg-sprite-loader!./svg', false, /.*\.svg$/));

const numberToPixels = value => (_isNumber(value) ? `${value}px` : value);

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: ${props => numberToPixels(props.size)};
  height: ${props => numberToPixels(props.size)};
  fill: ${props => props.color};
  cursor: pointer;
`;

// default size = 24px = 1.5em based on default font size = 16px
const Icon = ({
  type,
  size = '1.5em',
  color = 'rgba(0, 0, 0, .54)',
  ...rest
}) => (
  <Svg size={size} color={color} {...rest}>
    <use xlinkHref={`#${type}`} />
  </Svg>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

Icon.displayName = 'Icon';

export default Icon;

