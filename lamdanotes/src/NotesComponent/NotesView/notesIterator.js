import React from 'react';
import { Link } from 'react-router-dom';

import Note from './note.js';


//props from notesView.js
//notes={props.notes}

const NotesIterator = props => {
    console.log("props from notesIterator", props)
    return (
        <div className="noteBox">
            {props.notes.map( note => {
                return (
                <Link to={`note/${note._id}`}>
                    <Note key={note._id} title={note.title} body={note.textBody} id={note._id} />
                </Link>
            )})}
        </div>
    )
}

export default NotesIterator