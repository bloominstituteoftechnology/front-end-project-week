import React, { Component } from 'react';
import './App.css';
import NoteAppContainer from './components/NoteAppContainer/NoteAppContainer'


class App extends Component {
  render() {
    return (
     <div className="App">
      <NoteAppContainer />
     </div>
    );
  }
}

export default App;
