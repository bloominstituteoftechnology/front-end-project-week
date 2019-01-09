import React from 'react'

import './styles/Note.css'

const Note = props => {
    return (
        <div className="notecard">
            <div className="notecard-content">
                <strong>{props.title}</strong>
                <hr></hr>
                <p>{props.textBody}</p>
            </div>
        </div>
    );
};

export default Note;