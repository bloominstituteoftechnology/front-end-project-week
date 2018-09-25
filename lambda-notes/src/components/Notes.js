import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Notes = props => {
    return (
        <div className='main-view'>
            <h2>Your Notes:</h2>
            <div className='notes-container'>
                {props.notes.map(note => {
                    return (
                        <NavLink to={`/note/${note._id}`} className='note-container' key={note._id}>
                            <h3>{note.title}</h3>
                            <p>{note.textBody}</p>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )

}

export default Notes;