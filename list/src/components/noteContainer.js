import React from 'react';
import "./noteContainer.css";

export const NoteContainer = (props) => {
    return(
        <div>
            {props.notes.map((note => {
                return(
                    <div className="noteCard">
                        {note.id}
                        {note.title}
                        {note.content}
                    </div>
                )
            }))}
        </div>
    )
}