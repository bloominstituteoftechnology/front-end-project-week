import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SideBar from './components/sidebar/SideBar';
import Notes from './components/notes/Notes';
import AddNote from './components/notes/AddNote';
import OneNote from './components/notes/OneNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" component={Notes} />
        <Route path="/create" component={AddNote} />
        <Route path={`/note/:id`} component={OneNote} />
      </div>
    );
  }
}

export default App;
