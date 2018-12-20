import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NaviBar = styled.div`
  background: #D3D2D3;
  padding: 10px 10px;
  width: 85%;
  font-size: 2.75rem;
  display: flex;
  flex-direction: column;
  
`;

const Header = styled.div`
font-size: 3.5rem;
font-weight: bold;
line-height: 30px;
padding: 30px 30px;
`;



const NavBar = props => {
  return (
    <NaviBar>
      <Header>Lambda Notes</Header>
      <NavLink className="NavLink" to="/notes">View Your Notes</NavLink>
      <br></br>
      <NavLink className="NavLink" to='/createNote'> + Create New Note</NavLink>
    </NaviBar>
  );
};

export default NavBar;
