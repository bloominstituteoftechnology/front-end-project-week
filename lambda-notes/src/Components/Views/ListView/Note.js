import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'

const Note = props => {
    return (
        <Link className="note-links" to={`/note/${props.note.id}`}>
            <div className="note-container">
                <h3 className="note-title">{props.note.title}</h3>
                <hr/>
                <p className="note-body">{props.note.body}</p>
            </div>
        </Link>
    )
}

export default Note