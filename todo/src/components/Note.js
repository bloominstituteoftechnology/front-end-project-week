import React from 'react';
import {Link} from 'react-router-dom';

const Note = props => {
    return (
        <div className="Note">
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