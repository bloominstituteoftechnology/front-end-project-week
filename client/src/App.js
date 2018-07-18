import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Notes, { NoteNew, SingleNoteControl } from './components/Notes';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  width: ${window.innerWidth};
  margin: 0;
  display: flex;
  background: #eee;
`;
const Content = styled.div`
  margin-left: 400px;
  white-space: pre-line;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <Content>
          <Route exact path="/" component={Notes} />
          <Route exact path="/notes/new" component={NoteNew} />
          <Route path="/note/get/:id" component={SingleNoteControl} />
        </Content>
      </Container>
    );
  }
}

export default App;
