import React from 'react';
import { Link } from 'react-router-dom';


const NotesView = props => {
        return (
            <div className="notes-container">
                <h2>Your Notes:</h2>
                <div className="notes-grid">
                

                {props.notes.map(note => {
                    return (
                        <Link to={`/note/${note._id}`} key={note._id} >
                        <div className="note-card">
                        <div className="card-content">
                        <h4>{note.title}</h4>
                        <p>{note.textBody}</p>
                        </div>
                        </div>
                        </Link>
                    )
                    })}
                </div>
            </div>
        )
    }

export default NotesView;