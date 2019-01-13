import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
const SideNav = styled.div`
  width: 240px; 
  height: 100%; 
  display: flex; 
  flex-direction: column; 
  position: fixed; 
  background: #F0F0F0
`;
const NavBtn = styled(NavLink)`
  text-decoration: none; 
  width: auto;  
  height: auto;
  padding: 10px; 
  margin:10px; 
  background: #00C5C7; 
  display: flex; 
  justify-content: center; 
  align-content: center; 
  color: white; 
  border: none; 
`
const Text = styled.h1`
  color: #545454;
  margin: 15px; 
`;
const Nav = props => {
  return (
    <SideNav>
      <Text>QuicNotes</Text>
      <NavBtn to="/">
        View Your Notes
      </NavBtn>
      <NavBtn to="/create-new">
        Create New Note
      </NavBtn>
    </SideNav>
  );
};

export default Nav;
