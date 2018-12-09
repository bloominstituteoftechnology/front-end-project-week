import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const DivNavBar = styled.div`
  border: 1px solid black;
  flex-direction: column;
  max-width: 15%;
  height: 100vh;
  display: flex;
  position: absolute;
  padding: 5px;
`;

const NavBar = () => {
  return (
    <DivNavBar>
      <h1>Lambda Notes</h1>
      <NavLink to="/notes">View Your Notes</NavLink>
      <NavLink to="/create">+ Create New Note</NavLink>
    </DivNavBar>
  );
};

export default NavBar;
