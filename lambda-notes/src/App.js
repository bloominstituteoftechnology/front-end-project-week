import React, { Component } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import EditNote from "./components/EditNote";
import Note from "./components/Note";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
