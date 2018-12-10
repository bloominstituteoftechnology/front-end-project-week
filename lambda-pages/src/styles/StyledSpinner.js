import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// const animationStyles = css`

// `;

const StyledSpinner = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 41%;
    left: 57%;
    height: 10rem;
    width: 10rem;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid #dcdde1;
    border-top-color: #00a8ff;
    animation: ${rotate} 0.7s linear infinite;
  }
`;

export default StyledSpinner;


// K