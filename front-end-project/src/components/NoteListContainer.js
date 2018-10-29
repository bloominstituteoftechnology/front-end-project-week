import React from "react";
import './component.css'

const NoteListContainer = (props) => {

    return (
        <div className="note-container">
            {props.notes.map(note =>{
                return (
                <div key={note.id} className="list-contain">
                    <h4 key={note.id} className="note-title">{note.title}</h4>
                    <p key={note.id} className="note-body">{note.textBody}</p>
                </div>
                )
            })}
        </div>
    )
}

export default NoteListContainer;