import React, { Component } from 'react';
import './App.css';

import Notes from "./components/Notes"

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          Side Navigation
        </div>
        <div>
          <Notes />
        </div>
      </div>
    );
  }
}

export default App;
