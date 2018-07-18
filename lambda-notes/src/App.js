import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarExample from './components/SideBar';
import NoteForm from './components/NoteForm';
import ListView from './components/ListView';
import CreateNoteView from './components/OneNote';
import OneNote from './components/CreateNoteView';
import EditView from './components/EditView';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
        <Route exact path='/' component={ListView}/>
        <Route exact path='/note' component={CreateNoteView}/>
        <Route path='/createnote' component={OneNote}/>
        <Route path='/edit' component={EditView}/>
      </div>
    );
  }
}

export default App;
