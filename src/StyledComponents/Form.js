import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  h3 {
    padding: 5%;
  };
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  margin: 20px;
  background-color: #dea6af;
  color: white;
  text-align: center;
  font-size: 2rem;
 `;
