import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import CreateNote from './components/CreateNote';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={props => (<NotesList {...props} />)} />
        <Route path="/create" component={CreateNote} />
      </div>
    );
  }
}

export default App;
