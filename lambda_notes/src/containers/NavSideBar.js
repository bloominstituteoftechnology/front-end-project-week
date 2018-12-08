import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 300px;
  height: 100vh;
  padding: 20px 15px;
  background: #d8d8d8;
  border-right: 1px solid #979797;
`;

const H1 = styled.h1`
  color: #4a4a4a;
  display: block;
`;

const Span = styled.span`
  display: block;
`;

const StyledLink = styled(Link)`
  background: #2bc1c4;
  color: white;
  font-weight: bold;
  width: 85%;
  text-decoration: none;
  margin: 0 auto 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.3s ease-in-out;
  display: block;

  &:hover {
    background: white;
    color: #2bc1c4;
  }

  &:active {
    opacity: 0.5;
  }
`;

function NavSideBar() {
  return (
    <Nav>
      <H1>
        Lambda <Span>Notes</Span>
      </H1>
      <StyledLink exact to="/">
        View Your Notes
      </StyledLink>
      <StyledLink exact to="/note-add">
        + Create New Note
      </StyledLink>
    </Nav>
  );
}

export default NavSideBar;
