import React, { Component } from 'react';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import NotesContainer from './components/NotesContainer/NotesContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonContainer />
        <NotesContainer />
      </div>
    );
  }
}

export default App;
