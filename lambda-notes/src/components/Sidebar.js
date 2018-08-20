import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  height: 100%;
  width: 191px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #d3d2d3;
  padding: 10px;
  border-right: 1px solid #92a7a9;

  h1 {
    color: #414141;
  } 
`
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-top: 10px;
`

const Button = styled.div`
  background-color: #58b6bb;
  color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin: 7px 0;
  border: 1px solid #92a7a9;
`

const Sidebar = () => (
  <SidebarWrapper>
    <h1>Lambda Notes</h1>
    <LinkWrapper>
    <Link to="/">
      <Button>View Your Notes</Button>
    </Link>
    <Link to="/create">
      <Button>+ Create New Note</Button>
    </Link>
    </LinkWrapper>
  </SidebarWrapper>
);

export default Sidebar;
