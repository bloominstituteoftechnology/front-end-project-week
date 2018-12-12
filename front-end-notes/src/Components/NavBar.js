import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const CoolNavBar = styled.div`
  border: 10px solid pink;
  width: 33%;
  height: 100vh;
  
  left: 0;
`;

const NavBar = props => {
  return (
    <CoolNavBar>
      <h1>Lambda Notes</h1>
      <NavLink to="/notes">View Your Notes</NavLink>
      <br></br>
      <NavLink to='/createNote'> + Create a Note! </NavLink>
    </CoolNavBar>
  );
};

export default NavBar;
