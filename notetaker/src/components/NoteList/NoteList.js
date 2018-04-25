import React, { Component } from 'react';
import Note from '../Note/Note.js';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: [
        {title: 'Note 1', description: "fumo fumo fumo fumo"},
        {title: 'Note 2', description: "fumo fumo fumo fumo"},
        {title: 'Note 3', description: "fumo fumo fumo fumo"},
        {title: 'Note 4', description: "fumo fumo fumo fumo"}
      ]
    };
  }

render() {
  const {title, description} = this.state.notesList;
  return (
    <div>
      <h1>Your Notes:</h1>
      {this.state.notesList.map(note => (
        <div>
          <Note className='Noteslist' key={note} note={note} notesList={this.state.notesList}/> 
        </div>
      ))}
    </div>
    );
  }
}