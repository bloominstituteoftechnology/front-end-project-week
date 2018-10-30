import React from 'react'
import {NavLink} from 'react-router-dom';

function NotesList (props) {
    return (
        <div class='notes-container'>
            {props.notes.map(note => 
                (<NavLink key={note.id} to={`/${note.id}`}>
                    <div class='note-card'>
                    <h3 onClick={() => props.history.push(`/${note.id}`)}>{note.title}</h3>
                    <p>{note.textbody}</p>
                    </div>
                </NavLink>)
            )}
        </div> 
    )
    
} 

export default NotesList;
