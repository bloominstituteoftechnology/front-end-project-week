import React, { Component } from 'react';
import './App.css';

import NoteListView from './components/NoteListView';
import NoteTemplate from './components/NoteTemplate'"';
import Note from './components/Note';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

const privateRoutes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <h1>Your Notes</h1>,
    

  }
]

class App extends Component {
  render() {
    return (
      <NoteListView />
    );
  }
}

export default App;
