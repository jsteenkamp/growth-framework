import React from 'react';
import ReactDOM from 'react-dom';
import { navigate } from '@reach/router';
import sys from 'system-components';

const Container = sys(
  {
    position: 'absolute',
    bg: 'surfaceColor',
    boxShadow: 'lg',
  },
  props => ({
    overflow: 'hidden',
    top: props.top,
    right: props.right,
    width: props.width,
  })
);

class Modal extends React.Component {
  elem = null;

  state = {
    height: 0,
  };

  close = e => {
    if (this.elem && !this.elem.contains(e.target)) navigate('/');
  };

  componentDidMount() {
    this.setState(() => {
      const { height } = this.elem.getBoundingClientRect();
      return height;
    });
    document.addEventListener('click', this.close, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close, true);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      <Container top={'56px'} right={'1px'} ref={ref => (this.elem = ref)}>
        {children}
      </Container>,
      document.getElementById('portal')
    );
  }
}

export default Modal;
