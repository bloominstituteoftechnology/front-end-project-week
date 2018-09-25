import React from 'react';
import PropTypes from 'prop-types';
import NoteAdd from '../components/NoteAdd';
import NoteUpdate from '../components/NoteUpdate';
import NoteDelete from '../components/NoteDelete';

function NotesList(props) {
    return (
        <div>
            {props.notes.map(note => (
            <div key={note.id}>
                <h3>{note.name}</h3>
                <p>({note.content})</p>
            </div>
            ))}
        </div>
    );
}

NotesList.propTypes = {
  notes: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default NotesList;