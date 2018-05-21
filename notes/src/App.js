import React, { Component } from 'react';
import Create from "./Create";
import Delete from './Delete';
import Edit from './Edit';
import List from './List';
import Note from './Note'
import logo from './logo.svg';
import './App.css';

import { button } from 'reactstrap';

const routes = [
   { path: "/",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2> Your Notes </h2>,
}],


    


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
