import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8d8d8;
   @media (max-width: 500px) {
    width: 100%
  }
`;
export const H1 = styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  text-align: center;
  padding: 10%;
   @media (max-width: 500px) {
    padding: 5%
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-bottom: 10%;
  background-color: #dea6af;
  color: white;
  text-align: center;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  };
`;
