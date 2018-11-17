import React from 'react';
import {Link} from 'react-router-dom';

// Link goes here?

const Note = props => {
    return (
        <Link to={`/notes/${props.id}`}>
        <div className="Note">
                <h3>{props.title}</h3>
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