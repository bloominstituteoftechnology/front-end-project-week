import React, { Component } from 'react';
import Note from './Note';

class NoteContainer extends Component {
  state = {
    notes: [
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
    ]
  }
  render() {
    return (
      <div className="notes-container">
        <h2>Your Notes:</h2>
        <ul className="notes-list">
          {this.state.notes.map((note, i) => {
            return <Note note={note} key={i}/>
          })}
        </ul>
      </div>
    );
  }
}

export default NoteContainer;