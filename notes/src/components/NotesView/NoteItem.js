import React from 'react';
import { Link } from 'react-router-dom';
import './noteitem.css';

const NoteItem = props => {
    return (
        <Link className="note-item-link" to={`/${props.id}`} >
            <div className="note-item">
                <h3>{props.title}</h3>
                <hr />
                <p>{props.text}</p>
            </div>
        </Link>

    );
}

export default NoteItem;