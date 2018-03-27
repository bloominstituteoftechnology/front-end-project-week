import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar.js';
import Notes from './components/Notes/Notes.js';
import CreateNew from './components/CreateNew/CreateNew.js';
import NoteView from './components/NoteView/NoteView.js';
import EditNote from './components/EditNote/EditNote.js';

import NavRoute from "./router/NavRoute.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Sidebar />
        <Notes />
        <CreateNew />
        <NoteView />
        <EditNote /> */}
        <NavRoute />
      </div>
    );
  }
}

export default App;
