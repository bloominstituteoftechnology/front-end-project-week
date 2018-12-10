import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  padding: 1rem;
  text-align: center;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  color: #fafafa;
  background-color: #26a69a;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
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

export const Tag = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  background-color: #757575;
  color: #fafafa;
  padding: 0.5rem;
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
