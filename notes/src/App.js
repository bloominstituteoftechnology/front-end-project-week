import React, { Component } from 'react';
import './App.css';
import NoteList from '../src/Components/NoteList';
import Menu from '../src/Components/Menu';
import Title from '../src/Components/Tite';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="App">
          <Menu />
          <NoteList />
        </div>
      </div>
    );
  }
}

export default App;
