import React from 'react';
import "./noteContainer.css";

export const NoteContainer = (props) => {
    return(
        <div className="notesContainer">
            <h1 className="header">Your Notes: </h1>
            {props.notes.map((note => {
                return(
                    <div key={note.id}className="noteCard">
                        <h4 className="noteTitle">{note.title}</h4>
                        <div className="noteContent">{note.content}</div>
                    </div>
                )
            }))}
        </div>
    )
}