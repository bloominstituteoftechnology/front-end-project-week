import React, { Component } from 'react';

import Note from './Note';

class NoteList extends Component {
  render() {
    return (
      <div className="NoteList">
        <h1>Notes</h1>
        <ul>
          {this.props.notes.map(note => {
            return (
              <Note
                title={note.title}
                content={note.content}
                key={note.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Note.defaultProps = {
 notes: [],
};

export default NoteList;