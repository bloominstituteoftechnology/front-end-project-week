/* eslint no-confusing-arrow: [0] */

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`

  button {
    display: block;
    margin: 10px auto 0;
    width: 180px;
    height: 42px;
    color: white;
    font-size: 1.4rem;
    font-weight: 700;
    border: 1px solid #bfbfc0;
    border-radius: 2px;
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
    <button
      style={{ backgroundColor: props.backgroundColor }}
      type={ props.type ? props.type : null }
      onClick={() => (props.method) ? props.method() : null}>
      {props.title}
    </button>
  </StyledButton>
);

export default Button;
