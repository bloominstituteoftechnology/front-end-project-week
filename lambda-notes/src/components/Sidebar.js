import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

const StyledNavLink = styled(NavLink)`
color: white;    
text-decoration: none;
background-color: #2BC1C4; 
border: solid 1px #979797;
width: 21.7vw;
height: 40px;
text-align: center;
margin-bottom: 20px;
font-size: 1.4em;
padding-top: 20px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }
`;

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="navlinks">
      <h2><StyledLink to="/">Lambda Notes</StyledLink></h2>
        <StyledNavLink className="" to="/notes">
          View Your Notes
        </StyledNavLink>
        <StyledNavLink to="/create">+ Create New Note
        </StyledNavLink>
      </div>
    </div>
  );
};

export default SideBar;
