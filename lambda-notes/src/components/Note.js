import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {

    return (
        <div className = "card-content">
        <Link to={`/notes/${props.id}`} className="link">
            <h3 className="title">{props.title}</h3>
            <p className="text">{props.textBody}</p>
        </Link>
        </div>
    )
}

Note.defaultProps = {
    title: '',
    textBody:''
};

export default Note;