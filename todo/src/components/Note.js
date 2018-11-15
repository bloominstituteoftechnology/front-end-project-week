import React from 'react';

const Note = props => {
    return (
        <div className="Note">
            <p>I am not a note, I am a free man.</p>
            <h3>{props.title}</h3>
            <p>{props.textBody}</p>
        </div>
    )
}

Note.defaultProps = {
    tags: '',
    title: '',
    textBody: '',
}

export default Note