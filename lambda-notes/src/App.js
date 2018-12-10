import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import IndividualNote from './components/IndividualNote';

const AppDiv = styled.div`
  display: flex;
`

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Navigation />
        <Route exact path='/' render={props => <NotesList {...props} />} />
        <Route exact path='/add-note' component={NoteForm} />
        <Route exact path='/note/:id' render={props => <IndividualNote {...props} />} />
        <Route exact path='/edit-note/:id' render={props => <NoteForm {...props} edit/>} />
      </AppDiv>
    );
  }
}

export default App;

