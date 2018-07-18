import React from 'react';
import '../App.css';
import NoteTab from './NoteTab';
import {NavLink} from 'react-router-dom';

/*Purpose of this function is to act as a container for note tabs and to return them via array.map*/
class NotesContainer extends React.Component {
  render() {
    return (
      <div className="note-container">
        {this.props.notes.map(note => {
          return <NavLink id="view-edit-linkz" to={`/notes/${note['_id']}`}><NoteTab key={note['_id']} note={note} /></NavLink>
        })}
      </div>
    )
  }
}

export default NotesContainer;
