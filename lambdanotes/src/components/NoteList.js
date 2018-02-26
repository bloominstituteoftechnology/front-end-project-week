import React from 'react';
import Note from './Note';

class NoteList extends React.Component {
  state = {
    notes: this.props.notes,
  }

  render() {
    return (
      <ul>
        {this.state.notes.map((note, index) => {
          return (
            <Note
              key={index}
              title={note.title}
              body={note.body}
            />
          );
        })}
      </ul>
    );
  }
}

export default NoteList;