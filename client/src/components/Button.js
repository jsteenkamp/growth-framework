import sys from 'system-components';
import { themeGet } from 'styled-system';
import { darken } from 'polished';

const Button = sys(
  {
    is: 'button',
    fontSize: 2,
    fontWeight: 2,
    letterSpacing: '0.75px',
    m: 0,
    px: 3,
    py: 2,
    color: 'secondaryText',
    bg: 'secondaryColor',
    borderRadius: 2,
    border: 0,
    boxShadow: 'md',
  },
  props => ({
    fontFamily: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    appearance: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: `${darken(0.04, themeGet('colors.secondaryColor')(props))}`,
      boxShadow: 'lg',
    },
    '&:active': {
      backgroundColor: `${themeGet('colors.secondaryDarkColor')(props)}`,
    },
    '&:disabled': {
      opacity: '0.25',
    },
    '&:focus': {
      outline: 'none',
    },
  })
);

Button.displayName = 'Button';

Button.Outline = sys(
  {
    is: Button,
    color: 'secondaryColor',
    bg: 'secondaryText',
  },
  props => ({
    boxShadow: `inset 0 0 0 2px ${themeGet('colors.secondaryColor')(props)}`,
    '&:hover': {
      color: `${themeGet('colors.secondaryText')(props)}`,
    }
  })
);

export default Button;
