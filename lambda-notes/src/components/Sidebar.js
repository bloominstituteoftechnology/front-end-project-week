import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 48px;
    line-height: 36px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #505050;
    }
`;

const StyledNavLink = styled(NavLink)`
color: white;    
text-decoration: none;
background-color: #2BC1C4; 
border: solid 1px #979797;
width: 21.7vw;
height: 50px;
text-align: center;
margin-bottom: 20px;
font-size: 1.4em;
padding-top: 8px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }
`;

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="navlinks">
      <h2><StyledLink to="/">Lambda<br/>Notes</StyledLink></h2>
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
