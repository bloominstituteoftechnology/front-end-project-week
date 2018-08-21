import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Note from './Note';
import dummyData from '../dummyData'

const NotesList = props => {
    return(
        <div>
        {props.notes.map(note=>{
            return(
                <div>
                <Link to={`/notes/${note.id}`}>
                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
                </Link>
                </div>
            )
        })}
        </div>
    )
}

export default NotesList;