import React from 'react';
import PropTypes from 'prop-types';
import Start from './pages/Start';
import Values from './pages/Values';
import Roles from './pages/Roles';

const Pages = ({ id = 'start' }) => {
  switch (id) {
    case 'values':
      return <Values />;

    case 'roles':
      return <Roles />;

    default:
      return <Start />;
  }
};

Pages.displayName = 'Pages';

Pages.propTypes = {
  id: PropTypes.string,
};

export default Pages;
