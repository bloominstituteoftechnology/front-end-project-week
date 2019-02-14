import React from 'react';
import NoteCard from './NoteCard';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotesList = props => {
    return(
        <div className="notes-container">
            <h2>Your notes</h2>
            <div className="notes-wrapper">
                {props.notes.map((note, index) => {
                    return (
                        <div key={index} className="card">
                            <Link to={`/note/${note._id}`} >
                                <NoteCard {...props} title={note.title} id={note._id} textBody={note.textBody}/>
                            </Link>
                            <button onClick={() => props.deleteNote(note._id)}><FaTrashAlt/></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotesList;