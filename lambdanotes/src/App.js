import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listview from './Component/Layout/Listview';
import Noteview from './Component/Layout/Noteview';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        < Noteview/>
      </div>
    );
  }
}

export default App;
