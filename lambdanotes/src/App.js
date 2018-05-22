import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listview from './Component/Layout/Listview';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        < Listview/>
      </div>
    );
  }
}

export default App;
