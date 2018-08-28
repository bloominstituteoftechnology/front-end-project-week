import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const NavContainer = styled.div`
  background-color: #D2D1D2;
  height: 100vh;
  width: 230px;
  min-width: 230px;
  border-right: 1px solid #434343;
  padding-top: 10px;
  position: relative;
  left: 0;
  z-index: 2;
  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-left: 12%;
    height: 40px;
    margin-top: 5px;
  }
`;
const Buttons = styled.div`
  width: 195px;
  color: white;
  margin: 10px;
  margin: 0 auto;
  margin-top: -10%;
  position: absolute;
  top: 125px;
  right: 20px;
`;

const SideButton = styled.div`
  background-color: #5EB3BB;
  height: 40px;
  text-align: center;
  margin: 10px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  color: white;
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
      <h1>
        Lambda
        <br />
        Notes
      </h1>
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
