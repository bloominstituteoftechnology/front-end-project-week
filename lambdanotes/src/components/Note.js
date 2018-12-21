import React from 'react'
import './Home.css'

const Note = props => {
    return (
        <div className="notecard">
            <strong>{props.title}</strong>
            <p>{props.content}</p>
        </div>
    );
};

export default Note;