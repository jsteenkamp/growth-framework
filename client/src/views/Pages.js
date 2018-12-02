import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import ReactMarkdown from 'react-markdown';
import { Flex, Box, Page, Heading } from '@components';

const Pages = ({ id = 'start' }) => {

  return (
    <Page title="Growth Framework" description="The purpose of the framework is to help you plan your career progression and to provide a clear structure of what is expected in different roles.">
      <Heading.h6>Roles</Heading.h6>
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
    </Page>
  );
};

Pages.displayName = 'Pages';

Pages.propTypes = {
  id: PropTypes.string,
};

export default Pages;
