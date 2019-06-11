import React from 'react';
import { Link } from 'react-router-dom';
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

const MenuLink = styled(Link) `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  &:hover {
    text-decoration: none;
  }
`;

export const MenuBar = (props) => {
  return (
    <MenuBarContainer>
      <h1>Lambda<br/>
      Notes</h1>
      <MenuLink to='/'><MenuBarButton>View Your Notes</MenuBarButton></MenuLink>
      <MenuLink to='/new-note'><MenuBarButton>+ Create New Note</MenuBarButton></MenuLink>
    </MenuBarContainer>
  )
}
