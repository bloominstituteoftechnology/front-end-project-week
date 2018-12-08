import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const DivNavBar = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  max-width: 15%;
  height: 100vh;
`;

const NavBar = () => {
  return (
    <DivNavBar>
      <NavLink to="/notes">View Your Notes</NavLink>
      <NavLink to="/create">+ Create New Note</NavLink>
    </DivNavBar>
  );
};

export default NavBar;
