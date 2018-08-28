import React, { Component } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import "./App.css";

import SidePane from "./components/SidePane";
import Notes from "./NoteData";
import Note from "./components/Note";

const StyledApp = styled.div`
  background-color: #e3e3e3;
`;
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
        <h2>Your Notes:</h2>
        {this.state.notes.map(note => (
          <Note title={note.title} body={note.body} tags={note.tags} />
        ))}
        <Note />
      </StyledApp>
    );
  }
}

export default App;
