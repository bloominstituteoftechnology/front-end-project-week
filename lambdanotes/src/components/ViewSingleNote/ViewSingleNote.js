import React from 'react';
import './ViewSingleNote.css';

const ViewSingleNote= props => {
    return (
        <div className='single-note'>
            <span>edit</span>
            <span>delete</span>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
};

export default ViewSingleNote;