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
