import React, { Component } from 'react';
import NotesList from './components/NotesList';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <NotesList {...props}/>} />
      </div>
    );
  }
}

export default App;
