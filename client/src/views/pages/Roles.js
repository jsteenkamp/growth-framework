import React from 'react';
import PropTypes from 'prop-types';
import { Page, Map } from '@components';

const Roles = () => {
  return (
    <Page
      title="Roles and Responsibilities"
      description="The framework builds on shared Developer steps, with a fork to the Individual Contributor and People Management steps."
    >
      <Map />
    </Page>
  );
};

Roles.displayName = 'Roles';

Roles.propTypes = {
  id: PropTypes.string,
};

export default Roles;
