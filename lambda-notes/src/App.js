import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SideBar from './components/sidebar/SideBar';
import Notes from './components/notes/Notes';
import AddNote from './components/notes/AddNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" component={Notes} />
        <Route exact path="/create" component={AddNote} />
      </div>
    );
  }
}

export default App;
