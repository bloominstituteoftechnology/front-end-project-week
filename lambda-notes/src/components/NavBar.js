import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Navigator = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 25%;
  font-size: 2rem;
  
  display: flex;
  flex-direction: column;
  color: dark grey;
  background: #D3D2D3;
`;

const Header = styled.div`
font-size: 6rem;
font-weight: bold;
line-height: 50px;
`;



const NavBar = props => {
  return (
    <Navigator>
      <Header>Lambda Notes</Header>
      <NavLink className="NavLink" to="/notes">View Notes List</NavLink>
      <br></br>
      <NavLink className="NavLink" to='/createNote'> + Create a New Note! </NavLink>
    </Navigator>
  );
};

export default NavBar;