import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Route } from 'react-router-dom';

import Notes from './Components/Notes';
import NewNoteForm from './Components/NewNoteForm';
import NoteView from './Components/NoteView';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AppContent = styled.div`
  width: 900px;
  border: 1px solid #BABABA;
  display: flex;
`;

const MainContent = styled.div`
  width: 725px;
  background: #F0EFF0;
  display: flex;
  height: 100%;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <AppContent>
          <Sidebar />
          <MainContent>
            <Route exact path='/' component={Notes}/>
            <Route path='/new-note' component={NewNoteForm} />
            <Route path='/view-note' component={NoteView} />
          </MainContent>
        </AppContent>
      </Container>
    );
  }
}

export default App;
