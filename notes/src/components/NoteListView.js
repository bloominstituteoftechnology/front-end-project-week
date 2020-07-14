import React from 'react';
import './NoteDisplay.css';
import { NavLink } from 'react-router-dom';

const NoteListView = (props) => {
    return (
        <div className='notesAll'>
            <h2>Your Notes:</h2>
        <div className='notesContainer'>
            {props.noteContent.map(note => {
                return (
                    <NavLink style= {{textDecoration: 'none', color: 'black'}}to={`/notes/${note.id}`} activeClassName="selected">
                        <div className='singleNote'>
                            <h3>{note.Title}</h3>
                            <p>{note.Content}</p>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    </div>
    );
}

export default NoteListView;