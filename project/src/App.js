import React, { Component } from 'react';
import './App.css';
import Notebar from './components/notebar';
import Notelist from './components/notecontainer';

class App extends Component {
  render() {
    return (
      <div>
        <Notebar />
        <Notelist />
      </div>
    );
  }
}

export default App;
