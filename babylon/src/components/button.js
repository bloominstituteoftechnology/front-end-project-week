import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`

  button {
    display: block;
    margin: 20px auto 0;
    width: 180px;
    height: 42px;
    color: white;
    font-size: 1.4rem;
    font-weight: 700;
    border: 1px solid #bfbfc0;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }

`;

const Button = props => (
  <StyledButton>
    <button style={{ backgroundColor: props.backgroundColor }}>{props.title}</button>
  </StyledButton>
);

export default Button;
