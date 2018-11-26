import styled from "styled-components";

export const NavDiv = styled.div`
  width: 25%;
  height:100vh;
  background: grey;
  position: sticky;
  top: 0;
  margin-left:5%;
`;

export const NavHeader = styled.h1`
  font-size: 220%;
  color: black;
  margin: 0;
  padding-top: 10px;
  padding-left: 8%;
  line-height: 30px;
  letter-spacing:5px;
`;

export const NavLinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    align-items: center;
`;

export const NavBtn = styled.div`
  background: beige;
  border: 1px solid #b7b7b7;
  border-radius:5px;
  padding: 12px;
  width: 75%;
  font-size: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 70px;
  margin-top:25px;
  text-align: center;
  `


  export const NavButtonText = styled.p `
  color: white;
  font-size: 100%;
  margin: 0;
  
  ${NavBtn}:hover & {
    text-decoration: underline;
    cursor: pointer;
  }
  `