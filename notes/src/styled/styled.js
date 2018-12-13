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

  &:hover {
    opacity: .75;
    background-color: darkslategray;
  }

  &.red {
    background-color: #CA001A;
  }

  &:focus {
    outline: 0;
  }
`;

export const Input = styled.input`
  all: unset;
  background-color: white;
  border: 1px solid #424142;
  padding: .5rem;
  width: 60%;
  font-size: 1.6rem;
  border-radius: .3rem;
  margin-bottom: 2rem;

  &:focus {
    background-color: lightyellow;
  }
`;

export const Select = styled.select`
  border: 1px solid #424142;
  padding: .5rem;
  font-size: 1.6rem;
  border-radius: .3rem;
`;