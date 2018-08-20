import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  padding: 1rem;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fafafa;
  background-color: #26a69a;
  border: none;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #4db6ac;
  }

  &:active,
  &:focus {
    outline-color: #26a69a;
    outline-width: 2px;
  }
`;

export const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
