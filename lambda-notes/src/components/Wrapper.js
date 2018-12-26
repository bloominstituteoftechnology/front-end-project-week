import React from 'react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-left: 190px;
  padding: 0 15px 0 25px;
  background-color: #f2f1f2;
  margin-top: 50px;
  width: 568px;

  h4 {
    letter-spacing: 1px;
  }
`;

const Wrapper = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Wrapper;
