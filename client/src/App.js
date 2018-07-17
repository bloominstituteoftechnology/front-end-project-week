import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Notes, { NoteNew, SingleNoteControl } from './components/Notes';
import SideBar from './components/SideBar';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <Route exact path="/" component={Notes} />
        <Route exact path="/notes/new" component={NoteNew} />
        <Route path="/note/get/:id" component={SingleNoteControl} />
      </Container>
    );
  }
}

export default App;
