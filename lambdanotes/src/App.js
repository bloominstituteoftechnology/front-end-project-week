import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import Note from './components/Note';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      updated: false
    };
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='note-container'>
          {/* <Route exact path='/' render={props => (
            <NoteList {...props} />
          )} /> */}
          <Route exact path='/' component={NoteList} />
          <Route exact path='/notes/:id' render={props => (
            <Note {...props} /> 
          )} />
          {/* <Route path='/notes/:id' component={Note} /> */}
          <Route path='/new' component={NewNote} />
          <Route path='/notes/edit/:id' render={props => (<EditNote {...props} />)} />
        </div>
      </div>
    );
  }
}

export default App;
