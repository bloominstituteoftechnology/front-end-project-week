import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Note(props) {
    const note = props.notes.find(note => note._id === props.match.params.noteId);

    function handleDelete() {
        props.handleDeleteNote(note.id);
        props.history.push('/notes');
    }

    if (props.fetchingNotes || props.notes.length === 0) return <h2>Loading data...</h2>;

    return (
        <div className="note-view">
        <Link to="/addNote" onClick={props.goToUpdateNoteForm}>edit</Link>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
        </div>
    )
}