import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { SideBar } from './SideBar';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import NotesList from './NotesList';
import HomePage from './HomePage';

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <SideBar className="sideBar" />
          <Route exact path="/" component={HomePage} />
          <Route path="/view_notes" component={NotesList} />
      </div>
    );
  }
}

export default App;
