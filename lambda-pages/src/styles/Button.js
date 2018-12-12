import styled, { css } from 'styled-components';

const Button = styled.button`
  color: #fff;
  background: #00a8ff;
  font-size: 2.4rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    background: #4cc2ff;
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      margin-bottom: 1.5rem;
      @media (max-width: 800px) {
        width: 40%;
      }
    `};
  ${props =>
    props.halfWidth &&
    css`
      width: 48%;
    `};
  ${props =>
    props.delete &&
    css`
      background: #c23616;
      &:focus,
      &:hover {
        background: #e33f1a;
      }
    `};
`;

export default Button;
