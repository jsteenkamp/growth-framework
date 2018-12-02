import React from 'react';
import { Link as RouterLink } from '@reach/router';
import { Text } from '@components';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: inline-block;
  & > a {
    color: ${props => props.theme.colors.primaryText};
    text-decoration: none;
  }
`;

const Link = ({ children, ...rest }) => {
  return (
    <LinkWrapper>
      <RouterLink {...rest}>
        <Text.Body1>{children}</Text.Body1>
      </RouterLink>
    </LinkWrapper>
  );
};

Link.displayName = 'Link';

export default Link;
