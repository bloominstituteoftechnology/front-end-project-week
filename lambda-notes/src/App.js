import React, { Component } from 'react';
import Note from './components/Note';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {
        id: null,
        title: '',
        text: '',
        completed: false
      }
    };
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Your Notes</h1>
          <Note />
      </div>
    );
  }
}

export default App;
