import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Page, Box, Map, Heading, Skills, Values } from '@components';

const Start = () => {
  return (
    <Flex flexDirection="column" my={[3]} mx={[5]}>
      <Box width={'66%'}>
        <Heading.h3 my={[2]}>Growth Framework</Heading.h3>
        <Heading.h6>
          The purpose of the framework is to help you plan your software engineering career
          and to provide a clear structure of what is expected in
          different roles.
        </Heading.h6>
      </Box>
      <Box width={'66%'} my={[4]}>
        <Heading.h4 my={[2]}>Our Values</Heading.h4>
        <Heading.h6>
          All members of the software engineering team are expected to exhibit Syft’s
          values in their work, regardless of role or level.
        </Heading.h6>
      </Box>
      <Values my={[2]} />
      <Box width={'66%'} my={[4]}>
        <Heading.h4 my={[2]}>Roles and Responsibilities</Heading.h4>
        <Heading.h6>
          The framework builds on shared Engineer steps, with a fork to the
          Individual Contributor and People Management steps.
        </Heading.h6>
      </Box>
      <Flex>
        <Box width={'33%'}>
          <Flex flexDirection="column">
            <Box>
              <Heading.h6 my={[2]}>
                <strong>Engineers</strong> are focused on delivering value to
                the business, by building and maintaining software as part of
                the tech team.
              </Heading.h6>
            </Box>
            <Box>
              <Heading.h6 my={[2]}>
                <strong>Individual Contributors</strong> are individuals with
                technical expertise who are focused on growing and honing their
                technical skills, leading by example, and developing the team.
              </Heading.h6>
            </Box>
            <Box>
              <Heading.h6 my={[2]}>
                <strong>People Managers</strong> are individuals with
                development and leadership expertise who are focused on leading
                and growing the team.
              </Heading.h6>
            </Box>
          </Flex>
        </Box>
        <Box width={'66%'}>
          <Map />
        </Box>
      </Flex>
      <Box width={'66%'} my={[4]}>
        <Heading.h4 my={[2]}>Titles and Progression</Heading.h4>
        <Heading.h6>
          The role titles (including the numerics) are for you and your manager
          to keep track of your progress internally, but you are free to use
          anything sensible for your outward facing title (e.g. conference
          talks, LinkedIn). Determining when to progress from one role to the
          next is a discussion that should happen between you and your manager.
          As a general guide, performing a significant percentage of the
          responsibilities of the next role for 3-6 months would indicate
          readiness to step into that role.
        </Heading.h6>
      </Box>
      <Box my={[4]}>
        <Heading.h4 my={[2]}>Skills</Heading.h4>
        <Heading.h6>
          Each step and responsibilities are described in the context of 7
          different skills
        </Heading.h6>
        <Skills my={[2]} />
      </Box>
    </Flex>
  );
};

Start.displayName = 'Start';

Start.propTypes = {
  id: PropTypes.string,
};

export default Start;
