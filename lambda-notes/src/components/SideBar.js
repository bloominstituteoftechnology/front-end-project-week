import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const SideBar = styled.div`
  width: ${ props => props.theme.dimensions.sideBar.width };
  padding: ${ props => props.theme.dimensions.sideBar.padding };
  background-color: ${ props => props.theme.color.sideBarBG };
  color: ${ props => props.theme.color.headingText };
  border-width: ${ props => props.theme.dimensions.sideBar.borderWidth };
  border-color: ${ props => props.theme.color.border };
  border-style: solid;
  border-right: 0;
  
  h1 {
    font-family: ${ props => props.theme.font.heading};
    font-size: ${ props => props.theme.dimensions.sideBar.headingFontSize};
    margin: ${ props => props.theme.dimensions.sideBar.headingMargin };
    line-height: ${ props => props.theme.dimensions.sideBar.headingLineHeight };
  }

  a.active {
    button { 
      box-shadow: inset 0 0 10px white;
    }
  }
`;

export default () => {
  return (
    <SideBar>
      <h1>Lambda Notes</h1>
      <NavLink exact to="/">
        <Button>View Your Notes</Button>
      </NavLink>
      <NavLink exact to="/add/">
        <Button>+ Create New Note</Button>
      </NavLink>
      <Button>Export to CSV</Button>
    </SideBar>
  );
};
