import React from 'react';
import '../App.css';
import NoteTab from './NoteTab';

class NotesContainer extends React.Component {
  render() {
    console.log(this.props.notes)
    return (
      <div className="note-container">
        {this.props.notes.map(note => {
          return <NoteTab key={note['_id']} note={note} />
        })}
      </div>
    )
  }
}

export default NotesContainer;
