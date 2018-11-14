import React, { Component } from "react";
import styled from "styled-components";

import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SingleNote from './components/SingleNote';

// something styled - need flex for sidebar and notes
const MainDiv = styled.div`
  display: flex;
  max-width: 880px;
  margin: auto;
`;

const SideBar = styled.div`
  h1 {
    font-size: 4.6rem;
  }
`;

class App extends Component {
  render() {
    return (
      <MainDiv>
        <SideBar>
          <h1>Notable</h1>
        </SideBar>
        <NoteList />
        <NoteForm />
        <SingleNote />
      </MainDiv>
    );
  }
}

export default App;
