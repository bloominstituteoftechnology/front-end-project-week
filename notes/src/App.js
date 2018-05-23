import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ListView from './components/ListView';
import LeftNav from './components/LeftNav';

class App extends Component {
  render() {
    return (

      <div ClassName="app">
        <div ClassName="nav">
          <LeftNav />
        </div>
        <div ClassName="container-fluid">
          <ListView />
</div>          
      </div>
    );
  }
}

export default App;