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
                    <NavLink style= {{textDecoration: 'none', color: 'black'}}to={`/note/${note._id}`} activeClassName="selected">
                        <div className='singleNote' key={note._id}>
                            <h3>{note.title}</h3>
                            <p>{note.textBody}</p>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    </div>
    );
}

export default NoteListView;