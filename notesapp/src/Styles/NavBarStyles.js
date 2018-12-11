import styled from "styled-components";
import logo from '../img/Lambda-symbol.png'

export const NavBarDiv = styled.div`
  border-left: 1px solid #b7b7b7;
  border-right: 1px solid #b7b7b7;
  width: 18%;
  height: 100vh;
  background: #d3d2d3;
  position: sticky;
  top: 0;
`;

export const NavBarHeader = styled.h1`
  font-size: 220%;
  color: #424242;
  margin: 0;
  padding-top: 10px;
  padding-left: 3%;
  line-height: 30px;
  width: 40%;
`;

export const NavLinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    align-items: center;
`;

export const NavLinkBtn = styled.div`
  background: #24b8bd;
  border: 1px solid #b7b7b7;
  padding: 12px;
  width: 75%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  `


  export const NavButtonText = styled.p `
  color: white;
  font-size: 100%;
  margin: 0;
  
  ${NavLinkBtn}:hover & {
    text-decoration: underline;
    cursor: pointer;
  }
  `

export const LambdaLogo = styled.div `
    position: absolute;
    top: 710px;
    left: 110px;
    z-index: 2;
    background-image: url(${logo});
    background-size: cover;
    opacity: 1;
    background-repeat: no-repeat;
    height: 109px;
    width: 31%;
`