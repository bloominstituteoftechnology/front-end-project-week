// Dependencies
import React from 'react';
import styled, { css }  from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  /* colors */
  background-color: var(--color-bg--button-main);
  color: var(--color--button);
  /* sizing */
  width: 100%;
  height: 42px;
  /* box model */
  border: 0.5px solid var(--color-border);
  border-collapse: collapse;
  /* text */
  font-family: 'Roboto', sans-serif;
  ${props => props.delete && css`
    background-color: var(--color-bg--button-del);
  `}
`;

export const RLink = styled(Link)`
  /* sizing */
  width: 100%;
  height: 44px;
  /* text */
  text-decoration: none;
  color: var(--color--button);
`;