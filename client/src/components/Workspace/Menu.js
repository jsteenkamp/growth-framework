import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sys from 'system-components';
import { Text, Link, UserFromStore } from '@components';

const Box = sys(
  'position',
  'width',
  'height',
  'space',
  'borders',
  'color',
  'borderColor'
);

const Nav = styled(Box)`
  overflow: hidden;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.surfaceColor};
  box-shadow: ${props => props.theme.shadows.xl};
  transform: ${props =>
    props.open ? 'translateX(0)' : `translateX(-${props.width + 16}px)`};
  transition: all 0.25s ease-in-out;
  z-index: 10;
`;

const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => `1px solid ${props.theme.colors.primaryColor}`};
`;

const Item = styled(Box)`
  border-bottom: ${props => `1px solid ${props.theme.colors.primaryColor}`};
`;

const Footer = styled(Box)`
  bottom: 0;
  border-top: ${props => `1px solid ${props.theme.colors.primaryColor}`};
`;
// Menu also closes using "click outside" event capture
// https://github.com/tj/react-click-outside/blob/master/index.js

// close menu panel when navigating to new route
const ToggleLink = ({ to, toggle, children }) => (
  <Link to={to} onClick={toggle}>
    {children}
  </Link>
);

ToggleLink.displayName = 'ToggleLink';

ToggleLink.propTypes = {
  to: PropTypes.string,
  toggle: PropTypes.func,
  children: PropTypes.node,
};

class Menu extends React.Component {
  container = null;

  handle = e => {
    const { toggle, open } = this.props;
    if (open && this.container && !this.container.contains(e.target)) toggle();
  };

  componentDidMount() {
    document.addEventListener('click', this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true);
  }

  render() {
    const { toggle, open, headerHeight } = this.props;
    return (
      <UserFromStore roles={['admin']}>
        {({ hasRole }) => (
          <Nav
            ref={ref => (this.container = ref)}
            position="absolute"
            open={open}
            width={300}
            height="100vh"
          >
            <Header p={3} height={headerHeight}>
              <ToggleLink to="/" toggle={toggle}>
                Home
              </ToggleLink>
            </Header>

            <Item p={3}>
              <Text.Body1>Method Library</Text.Body1>
            </Item>
            <Item p={3}>
              <Text.Body1>Tags, Ports, Locations</Text.Body1>
            </Item>
            <Item p={3}>
              <Text.Body1>Services</Text.Body1>
            </Item>
            <Item p={3}>
              <Text.Body1>Users</Text.Body1>
            </Item>
            {hasRole && (
              <Item p={3}>
                <ToggleLink to="engineering" toggle={toggle}>
                  Engineering
                </ToggleLink>
              </Item>
            )}
            {hasRole && (
              <Item p={3}>
                <ToggleLink to="test" toggle={toggle}>
                  Test View
                </ToggleLink>
              </Item>
            )}

            <Footer position="absolute" width={300}>
              <Item p={3}>
                <Text.Body1>Help</Text.Body1>
              </Item>
              <Item p={3}>
                <Text.Body1>About</Text.Body1>
              </Item>
            </Footer>
          </Nav>
        )}
      </UserFromStore>
    );
  }
}

Menu.displayName = 'Menu';

Menu.propTypes = {
  toggle: PropTypes.func,
  open: PropTypes.bool,
  headerHeight: PropTypes.number,
};

export default Menu;
