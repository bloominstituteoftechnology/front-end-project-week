import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NotesList from './components/NotesList';
import Navigation from './components/Navigation';
import './App.css';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [
        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },

        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },

        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },

        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },
        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },
        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },
        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },
        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },
        {
            title: 'Note title',
            text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
        },
      ]
    }
}

addNote = (title, text) => {
  const newNotes = this.state.notes;
  console.log(newNotes, 'our notes from state')
  const newNote = {title: title, text: text}
  newNotes.push(newNote);
  this.setState({
    notes: newNotes,
  })
}



  render() {
    return (
      <div className='container'>
        
            <div className = 'notes-menu'>
              <h2> Lambda Notes </h2>
              <Navigation />
            </div>

            <div className = 'notes-list'>
              <Route exact path = '/' render = {() => <NotesList notes = {this.state.notes} /> } />
              <Route  path = '/AddNote' render = {() => <AddNote onSubmit = {this.addNote} /> } />
              <Route  path = '/ViewNote/:id' render = {() => <ViewNote notes = {this.state.notes} /> } />
            </div>
      </div>
    );
  }
}

export default App;
