import React, { Component } from 'react';
import Notes from './Notes';

class NotesList extends Component {
  render() {
    return (
      <div>
        <h2>Your Notes:</h2>
        <ul>
          {this.props.notes.map((note, index) => {
            return <li key={note.id}>{note.message}</li>
          })}
        </ul>
      </div>
    );
  }
}


export default NotesList;
