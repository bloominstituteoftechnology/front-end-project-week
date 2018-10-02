import React from 'react'
import {NavLink} from 'react-router-dom';



function NotesList (props) {
    return (
        <div>
            {props.notes.map(note => 
                (<NavLink key={note._id} to={`/${note._id}`}>
                    <div className='note-card'>
                    <h3 onClick={() => props.history.push(`/${note._id}`)}>{note.title}</h3>
                    <p>{note.textBody}</p>
                    </div>
                </NavLink>)
            )}
        </div> 
    )
    
} 

export default NotesList;
