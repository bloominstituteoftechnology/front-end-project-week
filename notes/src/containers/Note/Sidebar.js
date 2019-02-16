import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
const SideBar = styled.div`
  background: rgb(227, 227, 227);
  padding: 10px;
  position: sticky;
  height: 100vh;
  top: 0;
`;
const Header = styled.h1`
  display: block;
  font-size: 2em;
  font-weight: bold;
`;

const Button = styled.button`
  display: flex;
  background: #00cec9;
  border: 1px solid rgb(167, 167, 167);
  padding: 15px;
  margin: 10px;
  width: 210px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
`;


const Sidebar = props => {
  return (
    <SideBar>
      <Header>
        Lambda
        <br />
        Notes
      </Header>
      <NavLink exact to='/' style={{ textDecoration: 'none' }}>
        <Button>View Your Notes</Button></NavLink>
      <NavLink to='/create' style={{ textDecoration: 'none' }}>
        <Button>+ Create New Note</Button> </NavLink>
      <NavLink to='/signin' style={{ textDecoration: 'none' }}>
        <Button>Logout</Button> </NavLink>
    </SideBar>
  );
};

export default Sidebar;
