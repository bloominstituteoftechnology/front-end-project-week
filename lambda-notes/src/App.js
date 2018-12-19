import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NoteList from './components/Notes/NoteList';

import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      noteList: []
    };
  }
  
  render() {
    return (
      <div>
        <Route exact path="/" component={NoteList} />
      </div>
    );
  }
}