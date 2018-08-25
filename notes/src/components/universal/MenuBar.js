import React from 'react';
import styled from 'styled-components';

const MenuBarContainer = styled.div `
  width: 222.5px;
  background: lightgray;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MenuBarButton = styled.button `
  width: 70%;
  margin: 5px 0;
  background-color: #37c2c6;
  color: white;
  border: 1px solid lightgray;
  font-weight: bold;

  &:hover {
    color: black;
    border: 1px solid gray;
  }
`;


export const MenuBar = (props) => {
  return (
    <MenuBarContainer>
      <h1>Lambda<br/>
      Notes</h1>
      <MenuBarButton onClick={() => props.loadPage(props.notes)}>View Your Notes</MenuBarButton>
      <MenuBarButton onClick={() => props.addNewNote()}>+ Create New Note</MenuBarButton>
    </MenuBarContainer>
  )
}
