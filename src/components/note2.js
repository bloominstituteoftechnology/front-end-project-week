import React from 'react'
import "../css/note.css"

const Note2 = props => {
    return <div className="note-card">
        <div className="note">
            <div className="title">{props.title}</div>
            <div className="textBody">{props.textBody}</div>
        </div>
    </div>
};

export default Note2;