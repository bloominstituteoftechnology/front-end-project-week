import React from 'react';
import './Note.css';
import { Link } from 'react-router-dom';

const Note = props => {

    const singleNote = props.notes.find(singleNote => singleNote._id === props.match.params._id);
    console.log(singleNote);
    const singleActiveNote = props.activeNote;
    console.log(props.activeNote);
    
    return (
        <div className = "Note">
            <h2>{singleNote.tags}</h2>
            <h3>{singleNote.title}</h3>
            
            <hr/>
            <p>{singleNote.textBody}</p>

            <Link to = "/notes"><button onClick = {(_id) => props.deleteNote(props.match.params._id)}>Delete Note</button></Link>
            <button onClick = {props.updateNote}>Update Note</button>
        </div>
    )
}

export default Note;