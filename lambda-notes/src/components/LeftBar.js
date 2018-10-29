import React from 'react';
import './LeftBar.css';

const LeftBar = props => {
    return (
        <div className='leftBar'>
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <div>View Your Notes</div>
            <div>Create New Note</div>
        </div>
    )
}

export default LeftBar;