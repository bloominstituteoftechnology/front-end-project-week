import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <NavBar>
      <NavTitle>
        Lambda <Span>Notes</Span>
      </NavTitle>
      <StyledNavLink exact to="/" activeClassName="activeNavButton">
        View Your Notes
      </StyledNavLink>
      <StyledNavLink to="/addnote" activeClassName="activeNavButton">
        + Create New Note
      </StyledNavLink>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  background: #d3d2d3;
  height: 100vh;
  width: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid #c3c2c3;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  background: #59b5bb;
  color: white;
  border: 1px solid #9cb1b3;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 1.2rem;
  margin: 20px 0;
`;

const NavTitle = styled.h1`
  font-size: 2.2rem;
  margin: 10px 0;
  font-weight: 600;
`;

const Span = styled.span`
  color: #b92626;
`;
