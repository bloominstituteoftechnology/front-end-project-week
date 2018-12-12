import styled from 'styled-components'

export const AppWrapper = styled.div` 
  display: flex;
  background-color: #F2F1F2;
  height: 100%;
  // border: 3px solid red;
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

export const NotesView = styled.div`
  width: 80%;
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
  height: auto;
  // border: 1px solid green;
`;

export const NotesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 270px;
  margin: 10px;
  background-color: #ffff;
  overflow: hidden;
  border: 2px solid #D3D2D3;
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
  // border: 1px solid red;
`;

export const NoteNav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px
  text-decoration: none;
  // border: 1px solid black;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  // border: 1px solid green;
`;

export const ModalContent = styled.div`
  // display: flex;
  // justify-content: center;
  font-size: 20px;
  text-align: center;
  width: 75%;
  // border: 1px solid orange;
`;

export const ModalButtons = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  // border: 1px solid blue;
`;

export const Buttons = styled.button`
  background: ${props => props.delete ? '#CA001A' : '#26B7BD'};
  border: 1.5px solid ${props => props.delete ? '#C79197' : '#A2C2C3'};
  width: 35%;
  height: 45px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const FormWrapper = styled.div`
  height: 100vh;
  width: 75%;
  padding:0 1rem;
  // border: 1px solid red
`;

export const FormHeader = styled.h2`
  // border: 1px solid green
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border: 1px solid orange
`;

export const FormInputTitle = styled.input`
  width: 35%;
  height: 30px;
  border-radius: 3px;
  border: 1.5px solid #BABABA;
`;

export const FormInputText = styled.textarea`
  height: 250px;
  width: 50%;
  margin-top: 20px;
  border-radius: 3px;
  border: 1.5px solid #BABABA;
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


