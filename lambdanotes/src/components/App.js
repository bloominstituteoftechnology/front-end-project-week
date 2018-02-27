import React, { Component } from 'react';
import Notes from './Notes';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <div className="button-col">
            <button>View your notes</button>
            <button>+ Create your notes</button>
          </div>
        </div>
        <div className="notes">
          <h2 className="your-notes" > Your Notes: </h2>
          <div>
            <Notes /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
