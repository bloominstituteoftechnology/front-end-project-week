import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Note = props => {
    return (
        <div className="notecard">
            <strong>{props.title}</strong>
            <p>{props.textBody}</p>
            <Link to={`/notes/${props.id}`}>View Note</Link>
        </div>
    );
};

export default Note;