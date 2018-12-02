import React from 'react';
import PropTypes from 'prop-types';

const Pages = ({ id = 'start' }) => {
  console.log(id);
  return <h1>Growth Framework</h1>;
};

Pages.displayName = 'Pages';

Pages.propTypes = {
  id: PropTypes.string,
};

export default Pages;
