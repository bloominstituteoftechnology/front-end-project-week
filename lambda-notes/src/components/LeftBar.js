import React from 'react';
import './LeftBar.css';
import { Link } from 'react-router-dom';

const LeftBar = props => {
    return (
        <div className='leftBar'>
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <Link to={'/'}>View Your Notes</Link>
            <Link to={'/AddNoteForm'}>+ Create New Note</Link>
        </div>
    )
}

export default LeftBar;