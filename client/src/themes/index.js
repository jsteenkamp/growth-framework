import * as allColors from './colors';
import * as allShadows from './shadows';

// these values are exported for use as default values
// typically you would use the theme, this means we do not need to
// have functions to access the props.theme for defaults
export const colors = allColors;
export const shadows = allShadows;

// overwrite styled-system defaults
// https://github.com/jxnblk/styled-system/blob/master/docs/api.md#default-theme

// see example styled-system styles https://varun.ca/styled-system/
export const theme = {
  breakpoints: [ '30em', '40em', '52em', '64em' ],
  space: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ],
  fontSizes: [ 10, 12, 14, 16, 18, 21, 24, 36, 48, 60 ],
  // Material design uses light, regular, medium variants of Roboto - https://material.io/design/typography/the-type-system.html#type-scale
  fontWeights: [ 300, 500, 700 ],
  lineHeights: [0, 1, 1.5, 3, 8],
  colors,
  shadows,
};

export default theme;