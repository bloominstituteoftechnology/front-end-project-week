import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  height: 100vh;
  background: #D3D2D3;
`;

const NavButton = styled.button`
  width: 180px;
  height: 40px;
  margin-bottom: 25px;
  border: 1px solid gray;
  background: #24b8bd;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const NavBar = props => {
  return (
    <NavbarContainer>
      <h1>Lambda Notes</h1>

      <Link to='/'>
        <NavButton>View Your Notes</NavButton>
      </Link>

      <Link to='/new'>
        <NavButton>+ Create New Note</NavButton>
      </Link>
    
    </NavbarContainer>
  );
}

export default NavBar;