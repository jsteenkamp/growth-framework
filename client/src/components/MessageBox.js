import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > span {
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    padding: 0 0 10px 0;
    width: 100px;
    border-bottom: ${props => `1px solid ${props.theme.colors.primaryColor}`};
  }
  & > p {
    font-size: 14px;
    font-weight: 400;
    padding: 10px 0 0 0;
  }
  @media (min-width: 768px) {
    height: 40px;
    flex-direction: row;
    & > span {
      width: auto;
      border-bottom: 0;
      border-right: ${props => `1px solid ${props.theme.colors.primaryColor}`};
      padding: 0 20px 0 0;
    }
    & > p {
      padding: 0 0 0 20px;
    }
  }
`;

const MessageBox = ({ title, children }) => {
  return (
    <Container>
      <Box>
        <span>{title}</span>
        <p>{children}</p>
      </Box>
    </Container>
  );
};

MessageBox.displayName = 'MessageBox';

MessageBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default MessageBox;
