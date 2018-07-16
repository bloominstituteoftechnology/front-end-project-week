import React, { Component } from 'react';
import './App.css';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import NotesContainer from './NotesContainer/NotesContainer';
import CreateNotesContainer from './NotesContainer/CreateNotesContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route path='/' component={SideBarContainer} />
        <Route exact path='/' component={NotesContainer} />
        <Route path='/create' component={CreateNotesContainer} />

      </div>
    );
  }
}

export default App;
