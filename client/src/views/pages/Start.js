import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
// import ReactMarkdown from 'react-markdown';
import { Flex, Box, Page, Heading, Map } from '@components';

const Start = () => {
  return (
    <Page
      title="Growth Framework"
      description="The purpose of the framework is to help you plan your career progression and to provide a clear structure of what is expected in different roles."
    >
      <Box m={[2]}>
        <Link to={`/values`}>
          <Heading.h6>Our Values</Heading.h6>
        </Link>
      </Box>

      <Box m={[2]}>
        <Link to={`/roles`}>
          <Heading.h6>Roles and Responsibilities</Heading.h6>
        </Link>
      </Box>

      <Box m={[2]}>
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
          <Link key={id} to={`/role/${id}`}>
            <Heading.h6>{id}</Heading.h6>
          </Link>
        ))}
      </Box>
    </Page>
  );
};

Start.displayName = 'Start';

Start.propTypes = {
  id: PropTypes.string,
};

export default Start;
