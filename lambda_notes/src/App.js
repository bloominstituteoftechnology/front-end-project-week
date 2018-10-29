import React, { Component } from 'react';
import './App.css';

import NotesContainer from './containers/NotesContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NotesContainer />
      </div>
    );
  }
}

export default App;
