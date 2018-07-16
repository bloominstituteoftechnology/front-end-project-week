import React from 'react';
import '../App.css';
import Note from './Note';

class NotesContainer extends React.Component {
  render() {
    return (
      <div className="note-container">
        {this.props.notes.map(note => {
          return <Note note={note} />
        })}
      </div>
    )
  }
}

export default NotesContainer;
