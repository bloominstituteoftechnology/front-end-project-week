import React from "react";
import styled from "styled-components";

const SidebarNav = styled.div`
  height: 100vh;
  width: 20%;
  background: #d8d8d8;
  padding: 10px;
  position: sticky;
`;

export default props => (
  <SidebarNav>
    <h1>Lambda Notes</h1>
  </SidebarNav>
);
