import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  display: flex;
  margin: 20px 10px 15px;
  font-family: Raleway, sans-serif;
  font-size: 1.3rem;
  line-height: 180%;
  padding: 0, 10px;
`;

const TextBlock = props => (
  <StyledText>
    {props.body}
  </StyledText>
);

export default TextBlock;
