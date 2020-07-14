import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const NavContainer = styled.div`
  background-color: #d2d1d2;
  height: 100vh;
  width: 230px;
  min-width: 230px;
  border-right: 1px solid hsl(60, 1%, 68%);
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
  background-color: #5eb3bb;
  height: 40px;
  text-align: center;
  margin: 10px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  align-self: center;
  align-items: center;
  border-radius: 2px;
  a {
    text-decoration: none;
    color: white;
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
        {/* a's will be Links */}
        <Link className="noDecoration" to="/">
          <SideButton>View Your Notes</SideButton>
        </Link>

        <Link className="noDecoration" to={`/create`}>
          <SideButton>+ Create New Note</SideButton>
        </Link>
      </Buttons>
    </NavContainer>
  );
};

export default SidePane;
