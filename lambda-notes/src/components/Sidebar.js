import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #d3d2d3;

`

const Sidebar = () => (
  <SidebarWrapper>
    <h1>Lambda Notes</h1>
    <Link to="/">
      <div>View Your Notes</div>
    </Link>
    <Link to="/create">
      <div>+ Create New Note</div>
    </Link>
  </SidebarWrapper>
);

export default Sidebar;
