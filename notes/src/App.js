import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote';
import NotesList from './components/NotesList';
import Note from './components/Note';




import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route  path='/' component={SideBar} />
      <Route path='/note/create' component={CreateNote} />
      <Route exact path='/' component={NotesList} />
      <Route path={`/get/:id`} component={Note} />
      </div>
    );
  }
}

export default App;
