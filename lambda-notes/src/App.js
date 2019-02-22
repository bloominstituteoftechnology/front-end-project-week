import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SideBar from './components/sidebar/SideBar';
import Notes from './components/notes/Notes';
import AddNote from './components/notes/AddNote';
import OneNote from './components/notes/OneNote';
import UpdateNote from './components/notes/UpdateNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" component={Notes} />
        <Route path="/create" component={AddNote} />
        <Route path={`/note/:id`} component={OneNote} />
        <Route path={`/edit/:id`} component={UpdateNote} />
      </div>
    );
  }
}

export default App;
