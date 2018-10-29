import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'

const Note = props => {
    return (
        <Link className="note-links" to={`/note/${props.note._id}`}>
            <div className="note-container">
                <h2 className="note-title">{props.note.title}</h2>
                <hr/>
                <p className="note-body">{props.note.textBody}</p>
            </div>
        </Link>
    )
}

export default Note