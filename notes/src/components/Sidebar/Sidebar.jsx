import React from 'react';
import {
  StyledSidebar,
  StyledH1,
  StyledButton,
  StyledAltButton,
  StyledSidebarLink,
  StyledSidebarTitleLink,
  StyledMobileButton,
  StyledMobileAltButton,
} from './styles';

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledSidebarTitleLink to="/">
        <StyledH1>Lambda Notes</StyledH1>
      </StyledSidebarTitleLink>
      <StyledSidebarLink to="/">
        <StyledButton>View Your Notes</StyledButton>
        <StyledMobileButton>
          Home
        </StyledMobileButton>
      </StyledSidebarLink>
      <StyledSidebarLink to="/create">
        <StyledAltButton>+ Create New Note</StyledAltButton>
        <StyledMobileAltButton>+</StyledMobileAltButton>
      </StyledSidebarLink>
    </StyledSidebar>
  );
}

export default Sidebar;
