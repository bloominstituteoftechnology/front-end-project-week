import React from 'react';
import './index.css'

const Note = (props) => {
    return (
        <div className='note'>
            <h4>{props.tittle}</h4>
            <hr/>
            <p>{props.body}</p>
        </div>
    );
};

export default Note;