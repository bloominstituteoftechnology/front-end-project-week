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
        <div className="content">
          <Route exact path="/" component={NoteList} />
          <Route exact path="/note/:id" component={Note} />
          <Route exact path="/create" component={NoteForm} />
          <Route exact path="/edit/:id" component={NoteForm} />
        </div>
      </div>
    );
  }
}

export default App;
