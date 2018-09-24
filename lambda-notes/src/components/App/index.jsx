import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NoteList from '../NoteList';
import Form from '../Form';
import './index.css';

import SideBar from '../SideBar';

class App extends Component {
  // state to track data
  state = {
    notes: [],
    title: "",
    textBody: ""
  }

  render() {
    return (
      <div className="App">
        <SideBar />

        <Route exact path="/" component={NoteList} />
        
        <Route path="/notes/add" component={Form} />
      </div>
    );
  }
}

export default App;
