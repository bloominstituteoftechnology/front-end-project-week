import React, { Component } from 'react';
import './App.css';

import SideBar from './components/sidebar/SideBar';
import Notes from './components/notes/Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Notes />
      </div>
    );
  }
}

export default App;
