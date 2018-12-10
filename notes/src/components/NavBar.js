import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const DivNavBar = styled.div`
  border: 1px solid black;
  background-color: #d7d7d7;
  flex-direction: column;
  width: 12%;
  height: 100%;
  display: flex;
  position: fixed;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: #2ac0c4;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  margin: 10px 0;
`;

const NavBar = () => {
  return (
    <DivNavBar>
      <h1>Lambda Notes</h1>
      <NavLink to="/notes">
        <Button>View Your Notes</Button>
      </NavLink>
      <NavLink to="/create">
        <Button>+ Create New Note</Button>
      </NavLink>
    </DivNavBar>
  );
};

export default NavBar;
