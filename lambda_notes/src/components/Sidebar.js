// this is the sidebar it's the same on every page


import React from 'react';
import styled from 'styled-components';



 const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #ddd;
  padding: 1.5rem;
  border: 1px solid black;
`;
 const MainHeading = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 2rem;
`;
 const SideButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fafafa;
  background-color: #26a69a;
  border: none;
  display: block;
  cursor: pointer;
   &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
 const SideBar = () => {
  return (
    <StyledSideBar>
      <MainHeading>
        Lambda <br /> Notes
      </MainHeading>
       <SideButton>View Your Notes</SideButton>
       <SideButton>+ Create a new note</SideButton>
    </StyledSideBar>
  );
};
 export default SideBar;
