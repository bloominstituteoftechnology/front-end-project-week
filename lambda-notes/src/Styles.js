import styled from "styled-components";
import { Link } from "react-router-dom";

export const LeftBar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 1000px;
  background-color: #D3D2D3;
  border: 2px solid red;
  position: fixed;
  text-align: center;
`;

export const StyledLink = styled(Link)`
    font-size: 30px;
    font-weight: bold;
    color: black;
    text-decoration-line: none;
`;

export const ContainCards = styled.div`
    width: 70%;
    border: 10px solid blue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 25%;
    text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  width: 20%;
  height: 200px;
  overflow: hidden;
  border: 2px solid red;
  justify-content: center;
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
    margin-left: -45%;
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
    resize: none;
    border: 1.5px solid gray;

    ::-webkit-input-placeholder {
      padding-top: 2%;
      padding-left: 7%;
  }
`;

export const Formbtn = styled.button`
    width: 196px;
    height: 46px;
    color: white;
    background-color: #24B8BD;
    margin-left: 23%;
    margin-top: 1%;
`;