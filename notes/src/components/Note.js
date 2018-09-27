import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoteOption = styled.p`
text-decoration: underline;
padding: 5px;
`

const NoteTitle = styled.h2`
color: #474B4C;
`
const NoteBody = styled.p`
color: #474B4C;
`

const NoteTag = styled.p`
display: flex;
background-color: orange;
color: white;
width: 10%;
border-radius: 5px;
`

export default function Note(props) {
    const note = props.notes.find(note => note._id === props.match.params.noteId);

    function handleDelete() {
        props.handleDeleteNote(note._id);
        props.history.push('/notes');
    }

    function handleModal() {
        props.handleConfirmDelete();
    }

    if (props.fetchingNotes || props.notes.length === 0) return <h2>Loading data...</h2>;

    return (
        <div className="note-view">
        <div className="note-options">
        <NoteOption onClick={(event) => props.goToUpdateNoteForm(event, note._id)}>edit </NoteOption>
        <NoteOption onClick={props.handleConfirmDelete}> delete</NoteOption>
        </div>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteBody>{note.textBody}</NoteBody>
        <NoteTag>{note.tags}</NoteTag>
        </div>
    )
}