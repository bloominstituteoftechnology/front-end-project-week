import React from 'react'
import { Link } from 'react-router-dom'

const Note = props => {
    return (
        <Link to={`/note/${props.note._id}`}>
            <h4>{props.note.title}</h4>
            <h5>{props.note.textBody}</h5>
        </Link>
    )
}

export default Note