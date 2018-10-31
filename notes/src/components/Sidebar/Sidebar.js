import React from 'react';
import { StyledSidebar, StyledH1, StyledButton, StyledSidebarLink } from './styles';

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledSidebarLink to="/"><StyledH1>Lambda Notes</StyledH1></StyledSidebarLink>
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
