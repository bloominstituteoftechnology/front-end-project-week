import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from './components/NoteList';
import Note from './components/Note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NoteList} />
        <Route path="/note/:id" component={Note} />
      </div>
    );
  }
}

export default App;
