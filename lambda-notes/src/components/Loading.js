import React from 'react';
import styled from 'styled-components';
import { FadeLoader } from 'react-spinners';

const LoadWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <LoadWrapper>
    <FadeLoader />
  </LoadWrapper>
);

export default Loading;
