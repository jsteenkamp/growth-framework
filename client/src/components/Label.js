import sys from 'system-components';

const Label = sys(
  {
    is: 'label',
    fontSize: 2,
    mb: 1,
    align: 'center',
    color: 'primaryLightText',
    display: 'flex',
  },
  'alignItems',
  'space',
  'color'
);

Label.displayName = 'Label';

export default Label;
