import React from 'react';
import {Link} from 'react-router-dom';

import Note from './Notes';
import './notes.css'

const NotesList = props => {
    return(
        <div>
            <h2>
                Your Notes: 
            </h2>
            <div className = 'noteList'>
                {props.notes.map(note =>{
                    return (
                        <Link to = {`/note/${note._id}`} key = {note._id + note.title}>
                            <Note key = {note._id} note={note} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default NotesList;