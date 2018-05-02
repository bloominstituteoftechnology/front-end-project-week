import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import NoteList from './Components/NoteList';
import CreateNote from './Components/CreateNote';
import EditNote from './Components/EditNote';
import Note from './Components/Note';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Route exact path='/' component={NoteList} />
        <Route path='/create' component={CreateNote} />
        <Route path='/note/:id' component={Note} />
        {/* <EditNote /> */}
      </div>
    );
  }
}

export default App;
