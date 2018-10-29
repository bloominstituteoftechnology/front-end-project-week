import React from "react";
import './component.css'

const NoteListContainer = (props) => {

    return (
        <div className="note-container">
            {props.notes.map(note =>{
                return (
                <div key={note.id} class="list-contain">
                    <h4 className="note-title">{note.title}</h4>
                    <p className="note-body">{note.textBody}</p>
                </div>
                )
            })}
        </div>
    )
}

export default NoteListContainer;