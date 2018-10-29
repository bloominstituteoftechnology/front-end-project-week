import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
 const StyledSidenav = styled.div`
  background: #d3d2d3;
  width: 250px;
  height: 100vh;
  display:inline-block;
  position: fixed;
  left:0;
`;
 const Sidenav = () => {
  return (
    <StyledSidenav>
      <h1>Lambda Notes</h1>
      <Button>View Your Notes</Button>
      <Button>Create New Note</Button>
    </StyledSidenav>
  );
};
 export default Sidenav;