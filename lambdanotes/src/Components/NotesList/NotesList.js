import React from 'react';
import './notesList.css';
import { Link } from 'react-router-dom';

const NotesList = props => {
    return (
        <div className="notes-container">
            <h3 className="content-header">Your Notes:</h3>
                <div className="all-notes">
                    {props.notesArray.map((note,index) => {
                        return (
                        <Link to={`/note/${note._id}`} className="unstyledLink">
                            <div className="note" key={note._id}>
                                <div>
                                    <h4>{note.title}</h4>
                                    <hr></hr>
                                    <p>{note.textBody}</p>
                                </div>
                                </div>
                        </Link>
                        )
                    })};
                </div>
        </div>
        
    );
}

export default NotesList;