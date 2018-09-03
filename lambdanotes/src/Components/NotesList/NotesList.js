import React from 'react';
import './notesList.css';
import { Link } from 'react-router-dom';

const NotesList = props => {
    return (
        <div className="notes-container">
            <div><h3 className="content-header">Your Notes:</h3></div>
                <div className="all-notes">
                    {props.notesArray.map((note,index) => {
                        return (
                            <div className="note">
                                <h4 key={index}>{note.title}</h4>
                                <hr></hr>
                                <p>{note.textBody}</p>
                            </div>
                            
                        )
                    })};
                </div>
        
        </div>
        
    );
}

export default NotesList;