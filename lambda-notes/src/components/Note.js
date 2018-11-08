import React from 'react';
import './Note.css';
import { Link, NavLink } from 'react-router-dom';
import UpdateNoteForm from './UpdateNoteForm';

const Note = props => {

    let singleNote = props.notes.find(singleNote => singleNote._id === props.match.params._id);
    console.log(singleNote);
    const singleActiveNote = props.activeNote;
    console.log(props.activeNote);
    
    return (
        <div className = "Note">
            <h2>{singleNote.tags}</h2>
            <h3>{singleNote.title}</h3>
            
            <hr/>
            <p>{singleNote.textBody}</p>

            <Link exact to = "/notes"><button onClick = {(_id) => props.deleteNote(props.match.params._id)}>Delete Note</button></Link>
            <NavLink exact to = {`/notes/update/${props.match.params._id}`}><button>Update Note</button></NavLink>
            {/* <UpdateNoteForm /> */}
            
        </div>
    )
}

export default Note;