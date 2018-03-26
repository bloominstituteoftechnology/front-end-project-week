import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar.js';
import Notes from './components/Notes/Notes.js';
import CreateNew from './components/CreateNew.js';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote';

import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Notes />
        <CreateNew />
        <NoteView />
        <EditNote />
      </div>
    );
  }
}

export default App;
