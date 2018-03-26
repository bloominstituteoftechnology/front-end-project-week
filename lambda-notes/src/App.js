import React, { Component } from 'react';
import './App.css';

import ViewNotes from './components/ViewNotes';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ViewNotes />
      </div>
    );
  }
}

export default App;
