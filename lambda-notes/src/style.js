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
  text-transform: uppercase;
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

  @media only screen and (max-width: 600px) {
    width: 80%;
    border: 1px solid orange;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media only screen and (max-width: 900px) {
    width: 30%;
  }
  /* border: 1px solid purple; */
`;

export const SearchInput = styled.input`
  width: 85%;
  height: 40px;
  margin-left: 10px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1.4px solid #C3C2C3;

  @media only screen and (max-width: 900px) {
      height: 30px;
      width: 100%;
     margin-left: 0;
    }
`;
export const MobileNavWrapper = styled.section`
  display: none;

  @media only screen and (max-width: 900px) {
    background-color: #26B7BD;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border: 1.4px solid #C3C2C3;
  }


`;

export const MobileNavContent = styled.div`
@media only screen and (max-width: 900px) {
  display: flex;
  justify-content: space-between;
  width: 80%;


}

@media only screen and (max-width: 600px) {
  justify-content: space-around;
  width: 100%;
}
`;
export const NavWrapper = styled.div` 
  display: flex;
  justify-content: center;
  width: 25%;
  /* height: 100vh; */
  top: 0;
  left: 0;
  background-color: #d3d2d3;
  border: 1.5px solid #C3C2C3;
  @media only screen and (max-width: 900px) {
      display: none;
    }
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

  @media only screen and (max-width: 900px) {
      display: none;
    }
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
  @media only screen and (max-width: 900px) {
      width: 100%;
    }

`;

export const NotesHeader = styled.h2 `
  font-size: 35px;
  font-weight: bold;
  margin-top: 100px;
  margin-left: 45px;
 
  @media only screen and (max-width: 900px) {
      margin-top: 4rem;
      margin-left: 0;
      padding-left: 1rem;
      /* border: 1px solid red; */
    }
`;

export const NotesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  background-color: #F2F1F2;
`;

export const NotesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 270px;
  margin: 10px;
  background-color: #ffff;
  border: 1.3px solid #BABABA;
  cursor: default;
  :hover {
    transform: scale(1.2);
  }

  @media only screen and (max-width: 900px) {
      display: grid;
      grid-template-columns: repeat(3, auto);
      grid-template-rows: repeat(3, 10px); 
      width: 30%;
      :hover {
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 600px) {
    width: 45%;
    
    :hover {
      transform: scale(1);
    }
  }
`;

export const Notes =  styled.div`
   margin: 10px; 
`;

export const NotesTitle = styled.h3`
  padding-bottom: .5rem;
  border-bottom: 1px solid black;

  @media only screen and (max-width: 600px) {
    border: none;
  }
`;

export const NotesBody = styled.p`
  word-wrap: break-word;
`;

export const NoteWrapper = styled.div`
  height: 100vh;
  width: 75%;
  padding-left: 15px;

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const NoteContent = styled.div`
padding-left: 1.5rem;
`;

export const NoteNav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  text-decoration: none;
`;

export const NoteButton = styled.button`
  color: black;
  margin-top: 15px;
  margin-right: 10px;
  border: none;
  text-decoration: underline;
  font-size: 15px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const ModalContent = styled.div`
  font-size: 20px;
  text-align: center;
  width: 75%;

`;

export const ModalButtons = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
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
  /* height: 100vh; */
  width: 100%;

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
 
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    margin-top: 3rem;
  }
 
`;

export const FormInputTitle = styled.input`
  width: 35%;
  height: 30px;
  border-radius: 3px;
  border: 1.5px solid #BABABA;

  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

export const FormInputText = styled.textarea`
  height: 250px;
  width: 50%;
  margin-top: 20px;
  border-radius: 3px;
  border: 1.5px solid #BABABA;

  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

export const FormButton = styled.button`
  margin-top: 20px;
  width: 25%;
  height: 45px;
  background-color: #26B7BD;
  color: white;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 900px) {
    background-color:  #d3d2d3;
    color: #26B7BD;
    font-size: 3rem;
    width: 50%;
  }
`;

export const ChecklistWrapper = styled.div`
  margin: 4rem auto 0 auto;
  padding: 1rem;
  width: 90%;
  border: 2px solid #C3C2C3;

  h3 {
    text-align: center;
  }
`;

export const ChecklistForm = styled.form`
  display: flex;
  margin-top: 3rem;
  /* justify-content: space-around; */
  /* border: 1px solid #C3C2C3; */
  /* width: 60%; */
  input {
    margin-right: 2rem;
    padding-left: 10px;
    border-radius: 3px;
    border: 1.4px solid #C3C2C3;
  }

  button {
    background-color:  #d3d2d3;
    color: #26B7BD;
    font-size: 2rem;
    /* font-size: 3rem; */
    /* width: 50%; */
  }
`;

export const ChecklistContent = styled.div`
  display: flex;
  /* border: 1px solid orange; */
`;

