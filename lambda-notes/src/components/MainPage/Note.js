import React from 'react';

const Note = props => {
    return (
        <div className='note'>
            <div className='headline'>Note Title</div>
            <br />
            <div className='content'>
                <p> here's some sample content</p>
            </div>
        </div>
    )
}