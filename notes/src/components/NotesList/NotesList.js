import React from 'react';
import './NoteList.css';
import SingleNote from '../../views/SingleNote';
import { NavLink } from "react-router-dom";

function NotesList(props) {
    if(!props.notesList || !props.notesList.length) {
        return <h1>Make Your First Note!</h1>
    }
    
    return (
        <div className='note-container'>
            {props.notesList.map((note, index) => (  
                <div className='single-notes'>
                   <NavLink to={`notes/${note.title}`} activeClassName='active'>      
                    <SingleNote key={index} noteId={note.title} {...props} note={note}/>      
                    </NavLink>  
                </div> 
            ))}
        </div>
    );
}

export default NotesList;