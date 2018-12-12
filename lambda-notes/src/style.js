import styled from 'styled-components'

export const AppWrapper = styled.div` 
  display: flex;
  background-color: #F2F1F2;
  height: 100%;
  border: 3px solid red;
`;

export const NavWrapper = styled.div` 
  display: flex;
  justify-content: center;
  width: 25%;
  // height: 100vh;
  posotion: fixed;
  top: 0;
  left: 0;
  background-color: #d3d2d3;
  border: 1.5px solid #C3C2C3;
  // border: 1px solid orange;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* align-items: center; */
  margin: 0 1rem;
  //  border: 1px solid green; 
`;
export const NavHeader = styled.p`
  font-size: 55px;
  font-weight: bold;
  line-height: 3rem;
  margin-top: 0px;
  padding-top: 1.9rem;
  // border: 1px solid red;
`;

export const NavContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  margin-top: 15px;
  width: 100%;
  // border: 1px solid orange;
`;

export const NotesHeader = styled.h2 `
  font-size: 35px;
  font-weight: bold;
  margin-top: 100px;
  margin-left: 45px;
  // border: 1px solid salmon;
`;
export const NotesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  border: 1px solid green;
`;

export const NotesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 270px;
  margin: 10px;
  background-color: #ffff;
  border: 1px solid black;
`;

export const Notes =  styled.div`
   margin: 10px; 
`;

export const NotesTitle = styled.h3`
  padding-bottom: .5rem;
  border-bottom: 1px solid black
`;

export const NotesBody = styled.p`

`;

export const NoteWrapper = styled.div`
  height: 100vh;
  width: 75%;
  padding-left: 15px;
  border: 1px solid red;
`;

export const FormWrapper = styled.div`
  height: 100vh;
  width: 75%;
  padding:0 1rem;
  border: 1px solid red
`;

export const FormHeader = styled.h2`
  border: 1px solid green
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid orange
`;

export const FormInputTitle = styled.input`
  width: 35%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid blue
`;

export const FormInputText = styled.textarea`
  height: 150px;
  width: 75%;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid purple
`;

export const FormButton = styled.button`
  margin-top: 20px;
  width: 25%;
  height: 45px;
  background-color: #26B7BD;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
