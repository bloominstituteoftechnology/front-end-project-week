import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarExample from './components/SideBar';
import NoteForm from './components/NoteForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SidebarExample />
        <NoteForm />
      </div>
    );
  }
}

export default App;
