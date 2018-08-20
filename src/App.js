import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import NewNote from './components/NewNote';
import NavNotes from './components/NavNotes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavNotes />
        <Route exact path="/" component={Notes}/>
        <Route exact path="/note/:id" component={Note}/>
        <Route path="/new" component={NewNote}/>
        <Route path="/note/edit/:id" component={NewNote}/>
      </div>
    );
  }
}

export default App; 
