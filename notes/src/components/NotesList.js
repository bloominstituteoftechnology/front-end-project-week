import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Note from './DeleteNote';
import dummyData from '../dummyData'

const NotesList = props => {
    return(
        <div className = "notes-list-container">
        {props.notes.map(note=>{
            return(
                <div className = "note-container">
                <div className = "note">
                <Link to={`/notes/${note.id}`}>
                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
                </Link>
                </div>
                </div>
            )
        })}
        </div>
    )
}

export default NotesList;