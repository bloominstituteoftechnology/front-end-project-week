import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Note(props) {
    //const note = props.notes.find(note => note.id === parseInt(props.match.params.noteId, 10)
    //);

    //function handleDelete() {
     //   props.handleDeleteNote(note.id);
       // props.history.push('/notes');
   // }

    if (props.fetchingNotes || props.notes.length === 0) return <h2>Loading data...</h2>;

    return (
        <div className="note-card">
        <h2>{props.note.title}</h2>
        <p>{props.note.textBody}</p>
        </div>
    )
}