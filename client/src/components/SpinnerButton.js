import React from 'react';
import Spinner from './Spinner';
import Button from './Button';

const SpinnerButton = ({ show, children, ...rest }) => (
  <Button
    {...rest}
    style={{ position: 'relative', color: show ? 'transparent' : '' }}
  >
    <Spinner show={show} />
    {children}
  </Button>
);

export default SpinnerButton;
