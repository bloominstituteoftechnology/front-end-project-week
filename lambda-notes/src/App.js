import React, { Component } from 'react';

import Nav from './components/Nav/Nav';
import Notebook from './components/Notebook/Notebook';

import './App.css';

class App extends Component {
  render() {
    return (
      <div class='container row'>
        <Nav class='nav flex-column nav-side col-3' />
        <Notebook class='notebook col-9' />
      </div>
    );
  }
}

export default App;
