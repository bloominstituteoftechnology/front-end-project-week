import React, { Component } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import "./App.css";

import SidePane from "./components/SidePane";
import Notes from "./NoteData";
import NotesView from "./components/NotesView";


//Styles================================
const StyledApp = styled.div`
  background-color: #e3e3e3;
  display: flex;
  flex-wrap: nowrap;
  color: #434343;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  h2 {
    font-weight: bold;
    font-size: 24px;
    margin-left: 1px;
    margin-top: 30px;
    display: inline-block;
    width: 70%;
    height: 40px;
  }
`;
//=====================================

class App extends Component {
  state = {
    notes: []
  };
  componentDidMount() {
    this.setState({ notes: Notes });
  }
  render() {
    return (
      <StyledApp>
        <SidePane />
        <NotesView notes={Notes} />
      </StyledApp>
    );
  }
}

export default App;
