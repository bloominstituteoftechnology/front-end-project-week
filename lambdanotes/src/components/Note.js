import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Note = props => {
    return (
        <div className="notecard">
            <div className="notecard-content">
                <strong>{props.title}</strong>
                <hr></hr>
                <Link to={`/notes/${props.id}`} className="notecard-link">View note</Link>
                <p>{props.textBody}</p>
            </div>
        </div>
    );
};

export default Note;