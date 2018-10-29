import React, { Component } from 'react';
import './App.css';
import { NotesView } from './Views.js';
import { NotesProvider } from './NotesContext';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [

      ]
    }
  }
  render() {
    return (
      <NotesProvider>
        <div className="App">
          <NotesView />
        </div>
      </NotesProvider>
    );
  }
}

export default App;
