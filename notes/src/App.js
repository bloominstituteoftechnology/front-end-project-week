import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { CreateNote, DisplayNotes, EditNote, NavButtons, ViewNote } from './components';

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
        <Link to="/">DisplayNotes</Link>
        <Link to="/createNote">Create Note</Link>
        <Route path="/createNote" component={CreateNote}></Route>
        <Route exact path="/" component={DisplayNotes}></Route>

      </div>
    );
  }
}

export default App;
