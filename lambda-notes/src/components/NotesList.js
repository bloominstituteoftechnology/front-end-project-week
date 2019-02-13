import React from 'react';
import Note from './Note';
import {FaTrashAlt } from 'react-icons/fa';


const NotesList = props => {
    return(
        <div className="notes-container">
            <h2>Your notes</h2>
            <div className="notes-wrapper">
                {props.notes.map((note, index) => {
                    return (
                        <div key={index} className="card">
                            
                            <Note note={note} id={note.id} />
                            
                            <button onClick={() => props.deleteNote(note._id)}><FaTrashAlt/></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotesList;