import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Note from './components/Note';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" component={NoteList} />
        <Route path="/note/:id" component={Note} />
        <Route path="/create" component={NoteForm} />
      </div>
    );
  }
}

export default App;
