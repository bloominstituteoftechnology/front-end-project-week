import React from 'react';
import '../App.css';
import NoteTab from './NoteTab';
import {NavLink} from 'react-router-dom';
import Sortable from 'sortablejs';

/*Purpose of this function is to act as a container for note tabs and to return them via array.map*/
class NotesContainer extends React.Component {
  componentDidMount() {
    let sortableNotes = document.querySelector('.note-container')
    Sortable.create(sortableNotes);
  }
  render() {

    return (
      <div className="note-container">
        {this.props.notes.map(note => {
          return <NavLink key={note['id']} id="view-edit-linkz" to={`/notes/${note['id']}`}><NoteTab key={note['id']} note={note} /></NavLink>
        })

      }

      </div>
    )
  }
}

export default NotesContainer;
