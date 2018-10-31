import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.div`
  width: 100%;
  background-color: #f2f1f2;
  position: relative;
  top: -10px;
  max-height: 100%;
  height: auto;
`;

export const CardList = styled.div`
  padding-top: 20px;
  width 100%;
  height: 100%;
  position: relative;
  right: 0;
  display: flex;
  flex-flow: column;
  

 
`;

export const LeftBar = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 1200px;
  background-color: #d3d2d3;
  border: 1px solid grey;
  position: fixed;
  text-align: center;
  top: -1px;
  left: 0px;
  z-index: 30000;
`;

export const TitleH1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin-left: 5%;
  margin-bottom: 10px;
  width: 10px;
`;

export const NotesH2 = styled.h2`
  font-weight: bold;
  margin-left: 270px;
`;

export const StyledLink = styled(Link)`
  background-color: #24b8bd;
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration-line: none;
  margin-top: 10px;
  width: 75%;
  padding: 15px;
  margin-left: 5%;
  color: white;
  text-align: center;
  cursor: pointer;
`;

export const StyledLinkCard = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration-line: none;
`;

export const ContainCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  margin-left: 270px;
  text-align: center;

`;

export const Cards = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  overflow: hidden;
  border : 1px solid #D3D2D3;
  justify-content: center;
  background-color: white;
  margin: 0 40px 40px 0;
  -webkit-box-shadow: 7px 7px 8px -4px rgba(191,191,191,0.49);
  -moz-box-shadow: 7px 7px 8px -4px rgba(191,191,191,0.49);
  box-shadow: 7px 7px 8px -4px rgba(191,191,191,0.49);
`;

export const CardsH2 = styled.h2`
  color: black;
  font-weight: bold;
  text-decoration-line: none;
`;

export const CardsHr = styled.hr`
  width: 175px;
`;

export const CardsP = styled.p`
  color: black;
  font-size: 16px;
  padding: 5px;
  overflow: hidden;
  height: 50px;
`;

export const Modal = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(216, 216, 216, 0.377);
  z-index: 1000;
  justify-content: center;
  align-self: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalH3 = styled.h3`
  font-size: 20px;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormH1 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-left: -42.5%;
`;

export const TitleInput = styled.input`
  font-size: 20px;
  width: 30%;
  margin-bottom: 20px;
  border: 1px solid #d3d2d3;
  border-radius: 5px;
  ::-webkit-input-placeholder {
    padding-left: 3%;
  }
`;

export const BodyInput = styled.textarea`
  font-size: 20px;
  width: 60%;
  height: 400px;
  border: 1px solid #d3d2d3;
  border-radius: 5px;
  ::-webkit-input-placeholder {
    padding-top: 1%;
    padding-left: 3%;
  }
`;

export const Formbtn = styled.button`
  width: 196px;
  height: 46px;
  color: white;
  background-color: #24b8bd;
  margin-left: 23%;
  margin-top: 1%;
`;

export const FormContainer = styled.div`
  width: 100vw;
  height: 150vh;
  padding-top: 80px;
`;

export const NoteCardContainer = styled.div`
  
  margin-left: 270px;
  text-align: center;
  height: auto;
`;

export const NoteTitle = styled.h2`
  margin-top: 3%;
  font-size: 25px;
`;

export const NoteP = styled.p`
  padding: 5px;
  text-align: start;
  line-height: 1.5;
`;

export const EditNoteLink = styled.p`
  padding: 5px;
  text-align: start;
  display: inline-flex;
  margin-left: 85%;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const DeleteNoteLink = styled.p`
  padding: 5px;
  text-align: start;
  margin-left: 2%;
  display: inline-flex;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const EditFormH1 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-left: -47.5%;
`;