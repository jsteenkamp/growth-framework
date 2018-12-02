import React from 'react';
import PropTypes from 'prop-types';
import { Page } from '@components';

const Values = () => {
  return (
    <Page
      title="Our Values"
      description="All members of the technology team are expected to exhibit Syft's values in their work, regardless of role or level."
    >
    </Page>
  );
};

Values.displayName = 'Values';

Values.propTypes = {
  id: PropTypes.string,
};

export default Values;
