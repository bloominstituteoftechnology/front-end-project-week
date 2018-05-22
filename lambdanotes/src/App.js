import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listview from './Component/Layout/Listview';
import Createview from './Component/Layout/Createview';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        < Createview/>
      </div>
    );
  }
}

export default App;
