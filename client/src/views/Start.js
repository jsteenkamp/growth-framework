import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Map, Heading, Skills, Principles } from '@components';

const Start = () => {
  return (
    <Flex flexDirection="column" mx={[5]}>
      <Box width={'66%'} my={[4]}>
        <Heading.h1 my={[2]}>Engineering Growth Framework</Heading.h1>
        <Heading.h6>
          The framework provides a clear, transparent and consequently fair
          approach to career progression.
        </Heading.h6>
        <Heading.h6>
          Use the framework to help you plan your engineering career and to
          provide guidance of desired behaviors we expect at each level.
        </Heading.h6>
      </Box>
      <Box my={[2]}>
        <Heading.h4 my={[2]}>Our Principles</Heading.h4>
        <Heading.h6>
          We use our Principles every day, whether we&apos;re discussing ideas
          for new projects or deciding on the best approach to solving a
          problem.
        </Heading.h6>
        <Principles my={[2]} />
      </Box>
      <Box width={'66%'} my={[4]}>
        <Heading.h4 my={[2]}>Levels and Responsibilities</Heading.h4>
        <Heading.h6>
          The framework builds on common Engineer path, with a fork to technical
          leadership as an Individual Contributor or people leadership as a
          Leader.
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
                <strong>Leaders</strong> are individuals with development and
                leadership expertise who are focused on leading and growing the
                team.
              </Heading.h6>
            </Box>
          </Flex>
        </Box>
        <Box width={'66%'}>
          <Map headings={true} />
        </Box>
      </Flex>
      <Box width={'66%'} my={[4]}>
        <Heading.h4 my={[2]}>Levels and Progression</Heading.h4>
        <Heading.h6>
          The levels (including the numerics) are for you and your leader to
          keep track of your progress internally, you are free to use anything
          sensible for your outward facing title (meetups, conferences,
          LinkedIn).
        </Heading.h6>
        <Heading.h6>
          Determining when to progress from one level to the next is a
          discussion between you and your leader. As a general guide,
          consistently performing a significant percentage of the
          responsibilities of the next level for 3-6 months would indicate
          readiness to step that level.
        </Heading.h6>
      </Box>
      <Box my={[2]}>
        <Heading.h4 my={[2]}>Skills</Heading.h4>
        <Heading.h6>
          Levels and responsibilities are described in the context of 7 skills:
        </Heading.h6>
        <Skills my={[2]} />
      </Box>
      <Box width={'66%'} my={[2]}>
        <Heading.h6>
          Moving from left to right the skills shift from adder (TS,GSD,I) to
          multiplier (C,M,L,BK).
        </Heading.h6>
        <Heading.h6>
          Early progression is driven by growing adder skills. As you
          increasingly engage in high leverage multiplier activities you will
          have a larger sphere of influence and impact on the organization.
        </Heading.h6>
      </Box>
      <Box my={[4]}></Box>
    </Flex>
  );
};

Start.displayName = 'Start';

Start.propTypes = {
  id: PropTypes.string,
};

export default Start;
