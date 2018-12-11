import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const LeftBar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 1200px;
  background-color: #d3d2d3;
  border: 1px solid grey;
  position: fixed;
  text-align: center;
  top: -1px;
  left: 0px;
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
  margin-left: 23%;
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
  margin-left: 7%;
  color: white;
  text-align: center;

  &:hover {
    background: #d3d2d3;
    color: crimson;
    border: 1.5px solid crimson;
    box-shadow: 5px 10px #888888;
  }
`;

export const StyledLinkCard = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration-line: none;
`;

export const ContainCards = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 25%;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  width: 30%;
  height: 200px;
  overflow: hidden;
  border: 1px solid black;
  justify-content: center;
  background-color: white;
  margin-bottom: 40px;
  box-shadow: 5px 10px #888888;

  &:hover {
    background: #f2f1f2;
    border: 2px solid white;
  }
`;

export const CardsH2 = styled.h2`
  color: black;
  font-weight: bold;
  text-decoration-line: none;
`;

export const CardsHr = styled.hr`
  width: 70%;
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
  margin-left: 23%;
  width: 30%;
  margin-bottom: 20px;
  border: 1.5px solid gray;

  ::-webkit-input-placeholder {
    padding-left: 3%;
  }
`;

export const BodyInput = styled.textarea`
  font-size: 20px;
  margin-left: 23%;
  width: 60%;
  height: 400px;
  border: 1.5px solid gray;

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
  width: 70%;
  margin-left: 21%;
  text-align: center;
  height: auto;
`;

export const NoteTitle = styled.h2`
  margin-right: 62%;
  margin-top: 3%;
  font-size: 25px;
  border: 1px solid black;
  background: white;
  /* box-shadow: 5px 10px #888888; */
  width: auto;
  margin-left: 43px;
  margin-bottom: 30px;
`;

export const NoteP = styled.p`
  padding: 10px;
  text-align: start;
  margin-left: 4%;
  line-height: 1.5;
  border: 1px solid black;
  background: white;
  box-shadow: 5px 10px #888888;
`;

export const EditNoteLink = styled.p`
  padding: 5px;
  text-align: start;
  display: inline-flex;
  margin-left: 85%;
  text-decoration-line: underline;
  &:hover {
    color: crimson;
  }
`;

export const DeleteNoteLink = styled.p`
  padding: 5px;
  text-align: start;
  margin-left: 2%;
  display: inline-flex;
  text-decoration-line: underline;
  &:hover {
    color: crimson;
  }
`;

export const EditFormH1 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-left: -47.5%;
`;

export const LoginH1 = styled.h1`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 150px;
  padding-top: 40px;
  color: black;
`;

export const LoginHint = styled.h3`
  font-size: 20px;
  text-align: center;
  color: black;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 25%;
  font-size: 20px;
  margin-top: 10px;
  padding: 5px;
  text-align: center;

  :-webkit-autofill {
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0 100px white inset;
  }
`;

export const LoginButton = styled.button`
  margin-top: 15px;
  width: 75px;
  height: 30px;
  background-color: crimson;
  color: white;

  &:hover {
    background: white;
    color: crimson;
    border: 1.5px solid crimson;
  }
`;

export const LoginContainer = styled.div`
  background-color: rgba(128, 128, 128, 0.8);
  width: 43.89%;
  height: 350px;
  color: white;

  margin-left: 27%;
`;

export const LambdaH1 = styled.div`
  /* text-align: center; */
  color: black;
  font-weight: bold;
  font-size: 55px;
  margin-top: 118px;
  margin-bottom: -131px;
  width: 443px;
  margin-left: 8%;
  font-family: Verdana;

  /* backup plan */
  margin-top: 100px;
  margin-left: 35%;
`;

export const ExportBtn = styled.div`
  margin-top: 10px;
  width: 75%;
  padding: 15px;
  margin-left: 7%;
  color: white;
  text-align: center;
  background-color: #24b8bd;
  font-size: 18px;
  font-weight: bold;
  color: white;

  &:hover {
    background: #d3d2d3;
    color: crimson;
    border: 1.5px solid crimson;
    box-shadow: 5px 10px #888888;
  }
`;

export const SignOut = styled.div`
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding-top: 10px;

  &:hover {
    background: #d3d2d3;
    color: crimson;
  }
`;

export const Credits = styled.div`
  margin-top: 100px;
  width: 75%;
  padding: 15px;
  margin-left: 7%;
  color: white;
  text-align: center;
  background-color: blue;
  font-size: 18px;
  font-weight: bold;
  color: white;

  &:hover {
    background: #d3d2d3;
    color: crimson;
    border: 1.5px solid crimson;
    box-shadow: 5px 10px #888888;
  }
`;

export const LoginBackground = styled.div`
  /* background-image: url(https://lambdaschool.com/static/images/herogirl.png);
  background-size: auto;
  background-position: 127% 0%;
  background-repeat: no-repeat;
  height: 97vh;
  overflow: hidden; */

  /* backup plan image */
  background-image: url(https://images.pexels.com/photos/269448/pexels-photo-269448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-position: 50% -120px;
  height: 97vh;
  width: 99vw;
  background-repeat: no-repeat;
  overflow: hidden;
  border: 1.5px solid black;
`;

export const SearchInput = styled.input`
    width: 75%;
    padding: 0px;
    margin-left: 10%;
    font-size: 20px;
    margin-top: 126px;
    text-align: center;

  :-webkit-autofill {
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0 100px white inset;
  }
`;

export const LoginGoogle = styled.a`
  padding: 10px;
  background-color: white;
  text-decoration-line: none;
  border: 1px solid red;
`;