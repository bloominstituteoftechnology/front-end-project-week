import React from 'react';
import {Link} from 'react-router-dom';
import './ViewSingleNote.css';

const ViewSingleNote= props => {
    console.log(props);
    return (
        <div className='single-note-container'>
            <div className='spans'>
                <span>edit</span>
                <Link style={{ textDecoration: 'none', color:'black', marginTop:'30px' }} to= '/'>
                <span onClick={() => props.deleteNote()} >delete</span>
                </Link>
            </div>
            <div className='single-note'>
                <h3 className='h3'>{props.location.state.title}</h3>
                <p className='p'>{props.location.state.content}</p>
            </div>
        </div>
    );
};

export default ViewSingleNote;