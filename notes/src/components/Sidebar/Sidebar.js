import React from 'react';
import { StyledSidebar, StyledH1, StyledButton, StyledLink } from './styles';

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledH1>Lambda Notes</StyledH1>
      <StyledLink to="/">
        <StyledButton>View Your Notes</StyledButton>
      </StyledLink>
      <StyledLink to="/create">
        <StyledButton>+ Create New Note</StyledButton>
      </StyledLink>
    </StyledSidebar>
  );
}

export default Sidebar;
