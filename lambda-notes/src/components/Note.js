import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {

    return (
        <Link to={`/notes/${props.id}`}>
            <h3>{props.title}</h3>
            <p>{props.textBody}</p>
        </Link>
    )
}

Note.defaultProps = {
    title: '',
    textBody:''
};

export default Note;