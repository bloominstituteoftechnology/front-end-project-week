import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #ddd;
  border-top-color: #26a69a;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${spin} 0.6s infinite linear;
`;

const Loading = () => {
  return <Spinner />;
};

export default Loading;
