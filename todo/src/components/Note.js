import React from 'react';
import {Link} from 'react-router-dom';

const Note = props => {
    return (
        <Link to={`/notes/${props.id}`}>
        <div className="Note">
                <div className="note-title"><p><strong>{props.title}</strong></p></div>
                <p>{props.textBody}</p>
        </div>
        </Link>

    )
}

Note.defaultProps = {
    tags: '',
    title: '',
    textBody: '',
}

export default Note