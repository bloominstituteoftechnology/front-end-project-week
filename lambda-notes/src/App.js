import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ListView from './Components/ListView/ListView'
import CreateNote from './Components/CreateNote/CreateNote'


class App extends Component {
  render() {
    return (
      <div>
        <ListView/>
      </div>
    );
  }
}

export default App;
