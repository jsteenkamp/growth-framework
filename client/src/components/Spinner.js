import styled from 'styled-components';

// create a spinning box with one missing side
const Spinner = styled.div`
  &:not(:required) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -12px 0 0 -12px;
    width: 24px;
    height: 24px;
    border: 2px solid ${props => props.theme.colors.primaryLightColor};
    border-radius: 24px;
    border-right-color: transparent;
    display: ${props => props.show ? 'block' : 'none'};
    animation: spinner 1125ms infinite linear;
  }
  
  @keyframes spinner {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
`;

export default Spinner;