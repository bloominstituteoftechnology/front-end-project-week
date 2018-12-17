import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavContainer = styled.div`
background-color: #D3D2D3;
height: 58.6rem;

h1 {
margin-bottom: 2rem;
color: #424242;
line-height: 1;
font-size: 2.5rem;
}
`;

const StyledNavBar = styled.nav`
display: flex;
position: fixed;
max-width: 15rem;
`

const NavButton = styled.button`
width: 200px;
height: 50px;
color: #F2F9F8;
background-color: #24B8BD;
font-size: 1rem;

:first-child {
margin-bottom: 1rem;
}
`

const NavBar = () => {
  return (
    <StyledNavBar>
    <NavContainer>
        <h1>
          Lambda
          <br />
          Notes
        </h1>
        <NavLink exact to="/">
          <NavButton>View Your Notes</NavButton>
        </NavLink>
        <NavLink to="/create">
          <NavButton>+ Create New Note</NavButton>
        </NavLink>
    </NavContainer>
    </StyledNavBar>
  );
};

export default NavBar;