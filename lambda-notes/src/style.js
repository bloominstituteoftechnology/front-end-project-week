import styled from 'styled-components'

export const AppWrapper = styled.div` 
  display: flex;
  /* background-color: #F2F1F2; */
  height: 100vh;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  /* border: 1px solid red; */
`;

export const LoginHeading = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: #F2F1F2;
  justify-content: flex-end;
`;

export const LoginFormWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: #F2F1F2;
  opacity: .88;
  width: 50%;
  height: 400px;
  margin-top: 4rem;
  border: 1.5px solid #B1B7B8;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

export const LoginFormInputLabel = styled.h4`
  font-size: 19px;
`;


export const LoginFormInput = styled.input`
  width: 55%;
  height: 30px;
  margin-bottom: 2rem;
  border: 1px solid #B1B7B8;
`;

export const LoginButton = styled.button`
  background-color: #26B7BD;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: 1.5px solid #B1B7B8;
  width: 35%;
  margin-top: 3rem;
`;

export const SearchWrapper = styled.div`
  width: 90%;
`;

export const SearchInput = styled.input`
  width: 85%;
  height: 40px;
  margin-left: 10px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1.4px solid #C3C2C3;
`;

export const NavWrapper = styled.div` 
  display: flex;
  justify-content: center;
  width: 25%;
  top: 0;
  left: 0;
  background-color: #d3d2d3;
  border: 1.5px solid #C3C2C3;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 1rem;
`;
export const NavHeader = styled.p`
  font-size: 55px;
  font-weight: bold;
  margin-top: 0px;
  padding-top: 1.9rem;
`;

export const NavContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  margin-top: 15px;
  width: 100%;
`;

export const TopNavWrapper = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  width: 50%;
`;

export const DropdownWrapper = styled.div`
  width: 25%;
  height: auto;
  cursor: default;
  color: white;
  font-weight: bold;
  text-align: center;
  background: #26B7BD;
  border: 1.2px solid #BABABA;
`;

export const Dropdown = styled.div`
  width: 100%;
  padding-bottom: 5px;
`;

export const Ellipsis = styled.span`
  margin-left: 5px;
  font-size: 25px;
`;

export const DropdownItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  border-top: 1.2px solid white;
`;

export const DropdownItem = styled.button`
  text-align: left;
  padding-left: 1rem;
  color: white;
  font-weight: bold;
  border: none;
  background: #26B7BD;
  :hover {
    text-decoration: underline;
  }
`;

export const NotesView = styled.div`
  width: 80%;
  background-color: #F2F1F2;
`;

export const NotesHeader = styled.h2 `
  font-size: 35px;
  font-weight: bold;
  margin-top: 100px;
  margin-left: 45px;
`;

export const NotesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  background-color: #F2F1F2;
  // height: auto;
  // height: 100vh;
   //border: 1px solid green;
`;

export const NotesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 270px;
  margin: 10px;
  background-color: #ffff;
  cursor: default;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // border: 2px solid #D3D2D3;
  
  :hover {
    transform: scale(1.1);
  }
`;

export const Notes =  styled.div`
   margin: 10px; 
`;

export const NotesTitle = styled.h3`
  padding-bottom: .5rem;
  border-bottom: 1px solid black;
`;

export const NotesBody = styled.p`
  word-wrap: break-word;

/* border: 1px solid orange; */
`;

export const NoteWrapper = styled.div`
  height: 100vh;
  width: 75%;
  padding-left: 15px;
  /* border: 1px solid red; */
`;

export const NoteNav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  text-decoration: none;
  /* // border: 1px solid black; */
`;

export const NoteButton = styled.button`
  color: black;
  margin-top: 15px;
  margin-right: 10px;
  border: none;
  /* //background: #F2F1F2; */
  text-decoration: underline;
  font-size: 15px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  /* // border: 1px solid green; */
`;

export const ModalContent = styled.div`
  font-size: 20px;
  text-align: center;
  width: 75%;
  /* // border: 1px solid orange; */
`;

export const ModalButtons = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  border: 1px solid blue;
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

export const FormWrapper = styled.form`
  height: 100vh;
  width: 100%;
  padding: 0 1rem;
  border: 1px solid green;
`;

export const FormHeader = styled.h2`
   border: 1px solid green;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid orange;
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

export const EditFormInputTitle = styled.input`
width: 35%;
height: 30px;
border-radius: 3px;
border: 1.5px solid #BABABA;
  border: 1px solid red;
`;

export const EditFormInputText = styled.input`
height: 250px;
width: 50%;
margin-top: 20px;
border-radius: 3px;
border: 1.5px solid #BABABA;
  border: 1px solid blue;
`;

