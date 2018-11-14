import React, { Component } from 'react';
import Note from './Note';


class Notes extends Component {
  render() {
    return (
      <div className="Notes">
          <h1>Notes</h1>
          {this.props.notes.map(note => {
            return (
              <Note className="notes"
                title={note.title}
                id={note.id}
                text={note.textBody}
                key={note.id}
              />
            );
          })}
        </div>
    );
  }
}


export default Notes;
