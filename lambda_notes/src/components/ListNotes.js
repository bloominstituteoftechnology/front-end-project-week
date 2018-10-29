import React from 'react';
import { Link } from 'react-router-dom';

function NotesList(props) {
    function routeToNote(ev, note) {
        ev.preventDefault();
        props.history.push(`/notes/${note._id}`);
        props.getItemById(note._id)
    }
    return (
        <div className="container">
            {props.notes.map(note => (
                <div 
                onClick={ev => routeToNote(ev, note)}
                key={note._id} 
                >
                <p>{note.title}</p>
                <p>{note.textBody}</p>
                </div>
        ))}
        </div>
    );
}

export default NotesList;