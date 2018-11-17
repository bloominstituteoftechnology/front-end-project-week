import React from 'react';
import {Link} from 'react-router-dom';

const Note = props => {
    return (
        <div className="Note">
            <Link to={`/note/${props.note._id}`}>
                <h3>{props.title}</h3>
                <p>{props.textBody}</p>
            </Link>
        </div>

    )
}

Note.defaultProps = {
    tags: '',
    title: '',
    textBody: '',
}

export default Note