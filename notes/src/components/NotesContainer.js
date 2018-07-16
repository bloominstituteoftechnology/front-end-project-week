import React from 'react';
import '../App.css';
import NoteTab from './NoteTab';
import {NavLink} from 'react-router-dom';

class NotesContainer extends React.Component {
  render() {
    return (
      <div className="note-container">
        {this.props.notes.map(note => {
          return <NavLink to={`/notes/${note['_id']}`}><NoteTab key={note['_id']} note={note} /></NavLink>
        })}
      </div>
    )
  }
}

export default NotesContainer;
