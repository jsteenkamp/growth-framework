import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Flex, Box, Spinner, MessageBox, Text } from '@components';
import { Link } from '@reach/router';

const colors = {
  dark: 'lightskyblue',
  light: 'aliceblue',
};

const queryRoles = gql`
  query Roles($id: String) {
    roles(id: $id) {
      id
      title
    }
  }
`;

const RoleBox = ({ width = '40%', selected, role }) => {
  const { id, title } = role;
  const bg = selected === id ? colors.dark : colors.light;
  return (
    <Flex justifyContent="space-between">
      <Box />
      <Box m={[1]} p={[2]} width={width} minHeight={16} bg={bg}>
        <Link to={`/role/${id}`}>
          <Text align="center">{title}</Text>
        </Link>
      </Box>
      <Box />
    </Flex>
  );
};

const SplitBox = ({ width = '50%', selected, roles }) => {
  const bg =
    selected === roles[0].id || selected === roles[1].id
      ? colors.dark
      : colors.light;
  return (
    <Flex justifyContent="space-between">
      <Box />
      <Box m={[1]} p={[2]} width={width} minHeight={16} bg={bg}>
        <Text align="center">
          <Link to={`/role/${roles[0].id}`}>{roles[0].title}</Link> /{' '}
          <Link to={`/role/${roles[1].id}`}>{roles[1].title}</Link>
        </Text>
      </Box>
      <Box />
    </Flex>
  );
};

const Map = ({ selected }) => {
  return (
    <Query query={queryRoles} variables={{ id: 'software-engineering' }}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;

        if (error) {
          console.error(error);
          return (
            <MessageBox title="Error">Check console for details</MessageBox>
          );
        }

        const { roles } = data;

        return (
          <Flex flexDirection="column">
            <RoleBox selected={selected} role={roles[0]} />
            <RoleBox selected={selected} role={roles[1]} />
            <RoleBox selected={selected} role={roles[2]} />
            <SplitBox
              wselectedth={'60%'}
              selected={selected}
              roles={[roles[3], roles[4]]}
            />
            <Flex>
              <Flex width={'50%'} flexDirection="column">
                <RoleBox width={'80%'} selected={selected} role={roles[5]} />
                <RoleBox width={'80%'} selected={selected} role={roles[6]} />
              </Flex>
              <Flex width={'50%'} flexDirection="column">
                <RoleBox width={'80%'} selected={selected} role={roles[7]} />
                <RoleBox width={'80%'} selected={selected} role={roles[8]} />
              </Flex>
            </Flex>
          </Flex>
        );
      }}
    </Query>
  );
};

Map.displayName = 'Map';

Map.propTypes = {
  selected: PropTypes.string,
};

export default Map;
