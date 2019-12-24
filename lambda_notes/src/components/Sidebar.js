// this is the sidebar it's the same on every page

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  padding: 1.5rem;
  text-decoration: none;
`;
const MainHeading = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 2rem;
  color: black;
`;
const SideButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fafafa;
  background-color: #00A3FF;
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const styLink = styled.div`
color: #000;

`
const SideBar = () => {
  return (
    <StyledSideBar>
      <MainHeading style={{marginTop: 150}}>
      <styLink>
        <Link to="/" style={{color:'black'}}>Lambda <br /> Notes</Link>
      </styLink>
      </MainHeading>
      <SideButton>
        <Link to="/" style={{color:'white', backgroundColor: '#00A3FF'}}>View Your Notes</Link>
      </SideButton>
      <SideButton>
        <Link to="/createnote" style={{color:'white', backgroundColor: '#00A3FF'}}>+Create a New Note</Link>
      </SideButton>
    </StyledSideBar>
  );
};
export default SideBar;
