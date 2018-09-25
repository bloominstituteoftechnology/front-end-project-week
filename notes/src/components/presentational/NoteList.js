import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addNote } from '../../store/actions';
import Note from './Note';

import { NotesContainer, NoteAlign } from '../style/noteStyle';

function NoteList(props) {
  return (
    <NotesContainer>
      <h2>Your Notes:</h2>
      <NoteAlign>
        {props.notes.map(note => (
          <Link to={`/notes/${note.id}`} key={note.id} style={{margin: '0'}}>
            <Note note={note} />
          </Link>
        ))}
      </NoteAlign>
    </NotesContainer>
  )
}

const mapStateToProps = state => {

  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { addNote })(NoteList);