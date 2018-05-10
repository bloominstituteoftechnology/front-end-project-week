import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { SideBar } from './SideBar';
// import HomePage from './HomePage';
import NotesList from './NotesList';
import CreateNote from './CreateNote';
import NoteView from './NoteView';
import EditNote from './EditNote';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <SideBar className="sideBar" />
        <Route exact path="/" component={NotesList} />
        <Route path="/create" component={CreateNote} />
        <Route path="/edit/:id" component={EditNote} />
        <Route path="/note/:id" component={NoteView} />
      </div>
    );
  }
}

export default App;