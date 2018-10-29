import React, { Component } from 'react';
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import NavBar from './components/NavBar'
import Note from './components/Note'
import {Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <NoteForm />
        <Route exact path={'/'} component={NoteList} />
        <Route path={'/note/:id'} component={Note} />

      </div>
    );
  }
}

export default App;
