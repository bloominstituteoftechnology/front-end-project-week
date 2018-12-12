import styled from 'styled-components';

/***NAVBAR COMPONENT***/

export const DivNavBar = styled.div`
  border: 1px solid #c4c3c4;
  background-color: #d7d7d7;
  flex-direction: column;
  text-align: left;
  width: 195px;
  height: 100%;
  display: flex;
  position: fixed;
  padding: 2rem 1.8%;
  line-height: 0.9;

  @media (max-width: 600px) {
    position: static;
    width: 90%;
    margin: 0 auto;
  }
`;

/***NOTEFORM COMPONENT***/

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f2f1f2;
  //margin-left: 28%;
  margin-left: 300px;
  padding-top: 5.9rem;
  padding-left: 0.5rem;
  width: 70%;

  //@media (min-width: 1200px) {
  //margin-left: 31%;
  //}

  h2 {
    font-size: 2.1rem;
  }
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 1.4rem 1.7%;
  width: 55%;
`;

export const StyledTextArea = styled.textarea`
  height: 31rem;
  width: 90%;
  border-radius: 5px;
  padding: 1.9rem 3.4%;
`;

export const Button = styled.button`
  background-color: #2ac0c4;
  color: white;
  padding: 1.2rem 1%;
  font-weight: bold;
  font-size: 1.5rem;
  width: 100%;
  margin: 0.9rem 0;
`;

export const FormButton = styled(Button)`
  width: 31.5%;
  //padding: 5px 10px;
`;

/****NOTE COMPONENT****/

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  padding-top: 2rem;
  width: 100%;

  p {
    padding: 0 10px;
    text-decoration: underline;
  }
`;

export const SingleNote = styled.div`
  //margin-left: 28%;
  margin-left: 300px;
  text-align: left;
  width: 65%;
  padding: 2rem 1rem;

  //@media (min-width: 1200px) {
  //margin-left: 31%;
  //}

  p {
    white-space: pre-wrap;
    line-height: 1.5;
  }
  h2 {
    margin-top: 0.3rem;
    margin-bottom: 3rem;
    font-size: 2.2rem;
  }
`;

/****NOTES COMPONENT****/
export const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  //margin-left: 28%;
  //margin-left: 300px;
  padding-top: 6rem;
  //--marg: calc(100% - 195px);
  //margin-left: calc(var(--marg) / 2);
  margin-left: 300px;
  //margin-right: calc(var(--marg) / 2);

  @media (max-width: 800px) {
    align-items: center;
    margin-left: 275px;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }

  form {
    padding-left: 3%;
    width: 80%;

    @media (max-width: 600px) {
      padding-left: 0;
    }
  }
`;

export const SearchBar = styled(StyledInput)`
  width: 50%;
  //@media (max-width: 600px) {
  width: 100%;
  }
`;

export const DivNotes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
  justify-content: space-evenly;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNote = styled.div`
  border: 1px solid #cecece;
  background-color: #ffffff;
  padding: 10px 15px;
  width: 25%;
  min-width: 100px;
  //margin: 1.2rem 1.5%;
  margin: 1.2rem 0;
  height: 17.5rem;
  overflow: hidden;
  text-align: left;
  white-space: pre-wrap;

  @media (min-width: 1200px) {
    width: 18%;
  }
  @media (max-width: 850px) {
    width: 40%;
  }

  @media (max-width: 750px) {
    width: 90%;
    ////margin-left: 220px;
  }

  @media (max-width: 600px) {
    //margin-left: 220px;
    width: 80%;
    //margin: 0;
  }

  h2 {
    font-weight: bold;
  }
`;

/***Modal Component***/

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const StyledModal = styled.div`
  width: 46%;
  height: 13rem;
  position: fixed;
  top: 16%;
  text-align: center;
  left: 19%;
  //transform: translate(-50, -50%);
  border: 1px solid red;
  background-color: #ffffff;
  z-index: 2;
  padding: 4.5rem 4rem 2rem;

  p {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
`;

export const ModalButton = styled(Button)`
  margin: 10px;
  background-color: ${props => (props.delete ? '#CA001A' : null)};
  padding: 10px 20px;
`;
