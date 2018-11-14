import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from './components/NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NoteList} />
      </div>
    );
  }
}

export default App;
