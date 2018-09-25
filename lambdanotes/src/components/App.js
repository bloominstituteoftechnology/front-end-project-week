import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import '../styles/App.css';
import NotesForm from './NotesForm';
import Notes from './Notes'



class App extends Component {
  render() {
    return (
      <div className="App">
             <Notes />
             <NotesForm />
      </div>
    );
  }
}

export default App;