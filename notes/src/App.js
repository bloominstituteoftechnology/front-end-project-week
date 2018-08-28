import React, { Component } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import "./App.css";

import SidePane from "./components/SidePane";
import Notes from "./NoteData";
import Note from "./components/Note";

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
    margin-left: 20px;
    margin-top: 30px;
    display: inline-block;
    width: 70%;
    height: 40px;
  }
`;

const StyledNoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledViewWrapper = styled.div`
display: flex;
flex-direction: column;
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
        <StyledViewWrapper>
          <h2>Your Notes:</h2>
          <StyledNoteContainer>
            {this.state.notes.map(note => (
              <Note title={note.title} body={note.body} tags={note.tags} />
            ))}
          </StyledNoteContainer>
        </StyledViewWrapper>
      </StyledApp>
    );
  }
}

export default App;
