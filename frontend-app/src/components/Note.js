import React from 'react';
// import PropTypes from 'prop-types';
import './Note.css';
import { Link } from 'react-router-dom';

function NoteCard({ note }) {
    const { title, content } = note;
    return (
        <Link to={`/details/${note.id}`}>
            <div className='box'>
                <span>{title}</span>
                <p>{content}</p>
            </div>
        </Link>
    );
}

export default NoteCard;