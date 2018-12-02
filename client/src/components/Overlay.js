import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import sys from 'system-components';
import { Box, TouchIcon, Heading } from '@components';

const HEADER_HEIGHT = 56;

const Container = sys({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  bg: 'surfaceColor',
  overflow: 'hidden',
});

const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

class Overlay extends React.Component {
  elem = null;

  state = {
    height: 0,
  };

  close = e => {
    if (this.elem && !this.elem.contains(e.target)) navigate('/');
  };

  componentDidMount() {
    this.setState(() => {
      const rect = this.elem.getBoundingClientRect();
      return { height: rect.height - HEADER_HEIGHT };
    });
    document.addEventListener('click', this.close, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close, true);
  }

  render() {
    const { title, children } = this.props;
    return ReactDOM.createPortal(
      <Container ref={ref => (this.elem = ref)}>
        <Header height={HEADER_HEIGHT}>
          <Heading p={3}>{title}</Heading>
          <TouchIcon type="close" onClick={() => navigate('/')} />
        </Header>
        <div style={{ height: `${this.state.height}px`, overflow: 'auto' }}>
          {children}
        </div>
      </Container>,
      document.getElementById('portal')
    );
  }
}

Overlay.displayName = 'Overlay';

Overlay.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Overlay;
