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
    h3 {
    font-weight: 900;
    font-size: 2.5rem;
    padding: 5%;
  };
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  margin: 20px;
  background-color: #dea6af;
  color: white;
  text-align: center;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  };
 `;

 export const InputTitle = styled.input`
  height: 30px;
  width: 80%;
  margin-bottom: 20px;
  padding-left: 5%;
  font-size: 2rem;
 `
 export const InputText = styled.input`
  height: 500px;
  width: 80%;
  padding-left: 5%;
  font-size: 2rem;
 `