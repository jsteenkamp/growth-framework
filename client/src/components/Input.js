import sys from 'system-components';
import { themeGet } from 'styled-system';

const Input = sys(
  {
    is: 'input',
    type: 'text',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    px: 2,
    py: 2,
    m: 0,
    width: 1,
    boxShadow: 1,
    borderRadius: 4,
    borderColor: 'gray',
    color: 'inherit',
    bg: 'transparent',
  },
  props => ({
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    appearance: 'none',
    border: `1px solid ${themeGet(props.error ? 'colors.errorColor' : 'colors.primaryColor')(props)}`,
    backgroundColor: themeGet('colors.primaryLightColor')(props),
    '&:focus': {
      outline: 'none',
      boxShadow: `inset 0 0 0 1px ${themeGet('colors.secondaryLightColor')(props)}`,
    },
    '&:disabled': {
      opacity: 1 / 4,
    },
  })
);

Input.displayName = 'Input';

export default Input;
