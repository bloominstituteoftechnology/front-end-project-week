import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './Notes.css';

const Notes = props => {
    return (
        <div className="notes">
            <h2>Your Notes:</h2>
            {props.notes.map(note => (
                <Link key={note.id} to={`/notes/${note.id}`}>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
                </Link>
            ))}
        </div>
    );
}


export default Notes;