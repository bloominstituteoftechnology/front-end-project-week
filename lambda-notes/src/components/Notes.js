import React, { Component } from 'react';
import './Note.css';
import Note from './Note';

function Notes(props) {
    function routeToNote(ev, note) {
        ev.preventDefault();
        props.history.push(`/notes/${note.id}`);
        props.getNoteById(note.id)
    }
    return (
        <div className="Notes">
            <h1>Your Notes</h1>
            {props.notes.map(note => {
                return (
                    <Note 
                    onClick={ev => routeToNote(ev, note)}
                    tags={note.tags}
                    id={note.id}
                    title={note.title}
                    textBody={note.textBody}
                    key={note.id}
                    />
                )
            })}
        </div>
    )
}

export default Notes;