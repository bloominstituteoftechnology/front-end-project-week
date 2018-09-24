import React, { Component } from "react";
import styled from "react-emotion";

const NavBar = props => {
  const { selectedTheme } = props;

  return (
    <Header data-theme={selectedTheme}>
      <h1>Lambda Notes</h1>
      <Button data-theme={selectedTheme} onClick={() => props.history.push('/notes')}>View Your Notes</Button>
      <Button data-theme={selectedTheme} onClick={() => props.history.push(`${props.match.url}/create`)}>+ Create New Notes</Button>
    </Header>
  );
};
export default NavBar;

const Header = styled("header")`
  height: 100%;
  width: 17%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
  background-color: ${props => props.theme[props["data-theme"]].nav};
  border-right: 1px solid ${props => props.theme[props["data-theme"]].border};
  overflow-x: hidden;
  padding-top: 20px;
  padding: 20px;
  font-weight: bold;

  h1{
    overflow:hidden;
  }
`;

const Button = styled('div')`
overflow:hidden;
    position:relative;
    cursor: pointer;
    text-align: center;
    color: ${props =>  props.theme[props["data-theme"]].subBackground};
    background: ${props =>  props.theme[props["data-theme"]].button};
    border: 1px solid ${props => props.theme[props["data-theme"]].border};
    margin: 10px 0;
    padding: 10px;
`
