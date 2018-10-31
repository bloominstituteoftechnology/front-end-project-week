import React from 'react';
import { StyledSidebar, StyledH1, StyledButton, StyledSidebarLink } from './styles';

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledH1>Lambda Notes</StyledH1>
      <StyledSidebarLink to="/">
        <StyledButton>View Your Notes</StyledButton>
      </StyledSidebarLink>
      <StyledSidebarLink to="/create">
        <StyledButton>+ Create New Note</StyledButton>
      </StyledSidebarLink>
    </StyledSidebar>
  );
}

export default Sidebar;
