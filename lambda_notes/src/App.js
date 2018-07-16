import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';

const StyledApp = styled.div`
  display: flex;
  flex-flow: row;
  height: 100vh;
`;

class App extends Component { 

  render() {
    return (
      <StyledApp>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={NotesContainer} />
        <Route path="/:id" component={Note} />
      </StyledApp>
    );
  }
}

export default App;
