import React, { Component } from 'react';
import './App.css';
import Menu from './menu/menu';
import Home from './home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <container>
      <Home />
      <Menu />
 
      </container>
      </div>
    );
  }
}

export default App;
