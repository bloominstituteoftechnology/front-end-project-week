import React from 'react'

import { Link } from 'react-router-dom'


const NotesList = (props) => {
    return (
        <div className="noteslist-container">
            <h2> Your Notes: </h2>
            <div className="notebox-container">
                {props.notes.map(note => {
                    return(
                        <div className="notebox" key={note._id}>
                            <h2>
                                <Link to={`/notes/${note._id}`}>{note.title}</Link>
                            </h2>
                            <div className="contentbox">
                                <p> {note.textBody}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotesList

/* <NoteView note={note} handleDeleteNote={props.handleDeleteNote} /> */