import React from 'react';
import styled from 'styled-components';

import Note from './Note';

const LineBreak = styled.div`
border: 1px solid gray;
width: 90%;
margin: 5px auto;
`

export default function NotesList(props) {
    if (!props.notes || !props.notes.length) {
        return <h1> No data, needs to be fetched... </h1>;
    }
    return (
        <div className="notes-container">
        {props.notes.map((note) => (
            <div 
            className="note-card"
            key={note._id}
            onClick={() => props.history.push(`/notes/${note._id}`)}>
            <h2>{note.title}</h2>
            <LineBreak />
            <p>{note.textBody}</p>
            </div>
        ))}
        </div>
    );
}