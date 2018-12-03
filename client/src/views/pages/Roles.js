import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Page, Box, Map, Heading } from '@components';

const Roles = () => {
  return (
    <Page
      title="Roles and Responsibilities"
      description="The framework builds on shared Developer steps, with a fork to the Individual Contributor and People Management steps."
    >
      <Flex>
        <Box width={'30%'}>
          <Heading.h6 m={[2]}>
            Developers are focused on delivering value to the business, by
            building and maintaining software as part of the tech team.
          </Heading.h6>
          <Heading.h6 m={[2]}>
            Individual Contributors are individuals with technical expertise who
            are focused on growing and honing their technical skills, leading by
            example, and developing the team.
          </Heading.h6>
          <Heading.h6 m={[2]}>
            People Managers are individuals with development and leadership
            expertise who are focused on leading and growing the team.
          </Heading.h6>
        </Box>
        <Box width={'70%'}>
          <Map />
        </Box>
      </Flex>
    </Page>
  );
};

Roles.displayName = 'Roles';

Roles.propTypes = {
  id: PropTypes.string,
};

export default Roles;
