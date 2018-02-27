import React from 'react';
import Note from './Note';

import './NoteList.css';

class NoteList extends React.Component {
  state = {
    notes: this.props.notes,
  }

  render() {
    return (
      <div>
        <h2>Your Notes:</h2>
        <ul className="NoteList">
          {this.state.notes.map(note => {
            return (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;