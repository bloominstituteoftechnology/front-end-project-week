import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: 'note 0',
          note: this.ipsumNote
        },
        {
          id: 1,
          title: 'note 1',
          note: this.ipsumNote
        },
        {
          id: 2,
          title: 'note 2',
          note: this.ipsumNote
        },
        {
          id: 3,
          title: 'note 3',
          note: this.ipsumNote
        }
      ]
    }
  }

  ipsumNote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices nulla sit amet arcu tempus, non dapibus nibh tincidunt. Nam a ullamcorper arcu. Curabitur efficitur sem eget libero tincidunt, ac pharetra sem cursus.'


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
