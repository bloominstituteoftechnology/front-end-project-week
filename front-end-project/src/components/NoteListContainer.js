import React from "react";
import './component.css'


const NoteListContainer = (props) => {
    const routeToItem = (ev, note) => {
        ev.preventDefault();
        props.getNoteId(note)
        props.history.push(`/note-list/${note._id}`)
        console.log("noteID",note._id)
    }
    console.log("my props", props)
    return (
        <div className="note-container">
            <h1>Your Notes:</h1>
            <div className="note-wrapper">
            {props.notes.map(note =>{
                return (
                <div key={note._id} onClick={ev => routeToItem(ev, note)} className="list-contain">
                    <h4 className="note-title">{note.title}</h4>
                    <p className="note-body">{note.textBody}</p>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default NoteListContainer;

