import React, { Component } from 'react';
//importing NavBar component
import NavBar from './components/Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
      </div>
    );
  }
}

export default App;
