import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  width: 100%;
  
  h2 {
    margin: 30px 0 5px 10px;
    font-size: 2rem;
    letter-spacing: 1px; 
    font-weight: bold;
    color: #4a494a;
  }

`;

const SectionTitle = props => (
  <StyledTitle>
    <h2>{props.name}</h2>
  </StyledTitle>
);

export default SectionTitle;
