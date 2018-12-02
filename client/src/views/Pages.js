import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Flex, Box } from '@components';

const Pages = ({ id = 'start' }) => {
  return (
    <Flex flexDirection={'column'} m={[3]}>
      <h1>Growth Framework</h1>
      <ul>
        {[
          'software-developer-1',
          'software-developer-2',
          'senior-software-developer-1',
          'senior-software-developer-2',
          'technical-lead',
          'architect',
          'senior-architect',
          'engineering-manager',
          'engineering-director',
        ].map(id => (
          <li key={id}>
            <Link to={`/role/${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
};

Pages.displayName = 'Pages';

Pages.propTypes = {
  id: PropTypes.string,
};

export default Pages;
