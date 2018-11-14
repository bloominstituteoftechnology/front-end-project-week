import React from 'react';
import { Link } from 'react-router-dom';

const Note = (props) => {
    return(
        <div>
            <Link to={`/notes/${props.id}`}>
                <div>
                    <h5>{props.id}</h5>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </Link>
        </div>
    )
}

export default Note;