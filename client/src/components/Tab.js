import sys from 'system-components';
import { themeGet } from 'styled-system';

const Tab = sys(
  {
    is: 'a',
    fontSize: 3,
    fontWeight: 1,
    minWidth: 0,
    width: '120px',
    px: 3,
    py: 2,
    color: 'secondaryLightText',
    borderBottom: 3,
    borderColor: 'transparent',
    hover: {
      color: 'blue',
      cursor: 'pointer',
    },
    textAlign: 'center',
    textDecoration: 'none',
  },
  {
    overflow: 'hidden',
  },
  props => ({
    borderColor: props.selected
      ? themeGet('colors.secondaryColor')(props)
      : 'transparent',
  })
);

Tab.displayName = 'Tab';

export default Tab;
