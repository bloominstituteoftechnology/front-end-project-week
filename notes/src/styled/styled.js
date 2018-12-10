import styled from 'styled-components';

export const Button = styled.button`
  min-width: 18rem;
  margin: 0 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem;
  background-color: #24B8BD;
  color: white;
  border: 1px solid #424142;
  cursor: pointer;

  &.red {
    background-color: #CA001A;
  }
`;