import React from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

const ListedNote = ({ title, textBody, _id }) => {
    return (
        <div className="row">
        <div className="notes-box">
            <Link to={`/note/get/${_id}`}>{title}</Link>
            <p className="note-p">{textBody}</p>
            </div>
            </div>
    );
};

export default ListedNote;