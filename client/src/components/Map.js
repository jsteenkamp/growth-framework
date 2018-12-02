import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@components';

const RoleBox = ({ width = '30%', selected = false }) => {
  const bg = selected ? 'lightskyblue' : 'aliceblue';
  return (
    <Flex justifyContent="space-between">
      <Box m={[1]} />
      <Box m={[1]} width={width} height={15} bg={bg} />
      <Box m={[1]} />
    </Flex>
  );
};

const Map = ({ selected = 0 }) => {
  return (
    <Flex flexDirection="column">
      <RoleBox selected={selected === 1} />
      <RoleBox selected={selected === 2} />
      <RoleBox selected={selected === 3} />
      <RoleBox width={'50%'} selected={selected === 4 || selected === 7} />
      <Flex>
        <Flex width={'50%'} flexDirection="column">
          <RoleBox width={'60%'} selected={selected === 5} />
          <RoleBox width={'60%'} selected={selected === 6} />
        </Flex>
        <Flex width={'50%'} flexDirection="column">
          <RoleBox width={'60%'} selected={selected === 8} />
          <RoleBox width={'60%'} selected={selected === 9} />
        </Flex>
      </Flex>
    </Flex>
  );
};

Map.displayName = 'Map';

Map.propTypes = {};

export default Map;
