import React, { Component } from 'react';

import './App.css';
import NotesList from './components/Notes/NotesList';

class App extends Component {
  state = {
    notes: [
      {
        title: 'pizza',
        textBody: 'please eat some good pizza kid'
      },
      {
        title: 'cows',
        textBody: 'good for beef tacos!!'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
