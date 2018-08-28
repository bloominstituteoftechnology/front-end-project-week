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

`;
 const PrimaryHeading = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 2rem;
`;
 const BlockButton = styled.button`
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
      <PrimaryHeading>
        Lambda <br /> Notes
      </PrimaryHeading>
       <BlockButton>View Your Notes</BlockButton>
       <BlockButton>+ Create a new note</BlockButton>
    </StyledSideBar>
  );
};
 export default SideBar;