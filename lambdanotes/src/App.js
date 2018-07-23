import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Route } from 'react-router-dom';

import Notes from './Components/Notes';
import NewNoteForm from './Components/NewNoteForm';
import NoteView from './Components/NoteView';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div>
          <Route exact path='/' component={Notes}/>
          <Route path='/new-note' component={NewNoteForm} />
          <Route path='/view-note' component={NoteView}/>
        </div>
      </div>
    );
  }
}

export default App;
