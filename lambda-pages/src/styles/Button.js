import styled, { css } from 'styled-components';

 const Button = styled.button`
  color: #fff;
  background: #24b8bd;
  font-size: 2.4rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      margin-bottom: 1.5rem;
  `};
`;

 export default Button;