import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Note(props) {
    const note = props.notes.find(note => note._id === props.match.params.noteId);

    function handleDelete() {
        props.handleDeleteNote(note._id);
        props.history.push('/notes');
    }

    if (props.fetchingNotes || props.notes.length === 0) return <h2>Loading data...</h2>;

    return (
        <div className="note-view">
        <div className="note-options">
        <p onClick={(event) => props.goToUpdateNoteForm(event, note._id)}>edit</p>
        <p onClick={handleDelete}>delete</p>
        </div>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
        </div>
    )
}