import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  background-color: #d2d1d2;
  height: 100vh;
  width: 15%;
  min-width: 260px;
  margin-top: 0px;
  padding-top: 0px;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid grey;
  margin-bottom: 0px;
  padding: 0px;
  position: relative;
  left: 0;
  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-left: 12%;
    height: 40px;
    margin-top: 5px;

  }
`;
const Buttons = styled.div`
  width: 80%;
  color: white;
  margin: 10px;
  margin: 0 auto;
  margin-top: -10%;
  position: absolute;
  top: 110px;
  right: 30px;

`;

const SideButton = styled.div`
  background-color: #5eb3bb;
  height: 40px;
  text-align: center;
  margin: 10px;
  align-content: center;
  display: flex;
  justify-content: center;
  
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    align-self: center;
  }
`;
const SidePane = () => {
  return (
    <NavContainer>
        <h1>Lambda<br/>Notes</h1>
      <Buttons>
        <SideButton>
          <a href="#">View Your Notes</a>
        </SideButton>
        <SideButton>
          <a href="#">+ Create New Note</a>
        </SideButton>
      </Buttons>
    </NavContainer>
  );
};

export default SidePane;
