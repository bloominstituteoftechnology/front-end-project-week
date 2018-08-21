import React from 'react';
import { Link } from 'react-router-dom';
import './note.css';

const Note = props => {
    console.log(props);
    return (
        <div className="note">
            <div className="note-links">
                <Link to={`/${props.note.id}/edit`}>edit</Link>
                <a className="delete-btn">delete</a>
            </div>
            <h2>{props.note.title}</h2>
            <p>{props.note.text}</p>
        </div>
    );
};

export default Note;