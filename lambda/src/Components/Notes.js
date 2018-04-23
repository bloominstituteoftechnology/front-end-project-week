import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

const Note = ({ onClick, title, content, id  }) => (
    <div onClick={onClick} className='note'>
    <Link to={`/viewnote/${id}`}>
    <h1>{title}</h1>
    <p>{content}</p>
    </Link>
    </div>
)

export default Note;