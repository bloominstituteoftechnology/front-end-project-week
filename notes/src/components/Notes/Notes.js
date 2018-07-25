import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {
  render() {
    return(
      <div className="notes">
        <h1>Your Notes</h1>
        {this.props.notes.map(note => {
          return(
            <Note
              title={note.title}
              textBody={note.textBody}
            />
          );
        })}
      </div>
    )
  }
}
export default Notes;
