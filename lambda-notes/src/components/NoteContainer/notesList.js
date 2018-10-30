import React from 'react';
import NoteCard from './noteCard';
import { Link } from 'react-router-dom';
import Note from './note';


const NotesList = props=>{
    return(
        <div>
            <h3>Your Notes:</h3> 
            {props.notes.map(note=>(
            <Link to={`/notes/${note._id}`} id={note._id} key={note._id}>
            <NoteCard key={note._id} note={note} />
            </Link>
            ))}
        </div>
    )
}

export default NotesList;