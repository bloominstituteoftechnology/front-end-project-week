import React, { Component } from 'react';
import { connect } from 'react-redux';
import notes from '../../data/notes';
import Note from '../note/note';
// import actions

class NotesList extends Component {
  state = {
    notesListHeading: "Your Notes:"
  }
  render() {
    return (
      <div className="lambda-notes">
        <h1>{this.state.notesListHeading}</h1>
        <ul>
          {notes.map(note => {
            return (
              <Note />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default NotesList;
