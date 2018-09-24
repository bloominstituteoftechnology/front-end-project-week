import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addNote } from '../../store/actions';
import Note from './Note';

function NoteList(props) {
  return (
    <div>
      <div>
        <h2>Your Notes:</h2>
        {props.notes.map(note => (
          <Link to={`/notes/${note.id}`} key={note.id}>
            <Note note={note} />
          </Link>

        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { addNote })(NoteList);