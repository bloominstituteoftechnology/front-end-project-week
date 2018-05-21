import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import SideBar from './components/SideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="container">
          <div className="home-page">
            <Route exact path="/" component={NoteList} />
          </div>
          <div className="create-note">
            <Route path="/addNote" component={CreateNote} />
          </div>
          <div className="edit-note">
            <Route path="/editNote" component={EditNote} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
