import React, { Component } from 'react';
import '../App.css';
import Note from './Note';

import { Link } from 'react-router-dom';

class Notes extends Component {

  render() {
    console.log('notes list inside Notes.js', this.props.notes);  
    return (
      <div className="notes-container">
        <h2 className="notes-heading">Your notes:</h2>
        <div className="note-cards">
          {this.props.notes.map(note => {
            return (
              <Link className="note" to={`/get/${note._id}`} key={note._id || note.title}>
                <Note
                  note={note}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}


export default Notes;