import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const StyledSidebar = styled.div`
  background: #d3d2d3;
  width: 25%;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h1>Lambda Notes</h1>
      <Button>View Your Notes</Button>
      <Button>Create New Note</Button>
    </StyledSidebar>
  );
};

export default Sidebar;
