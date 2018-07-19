import React from 'react';
import './index.css'

const DeleteNote = (props) => {
    let toggle = props.toggle
    return (
           <div className={ toggle ? "delete-container" : "hidden"  }>
                <div>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div className='button'>
                    <div className='delete-button'>DELETE</div>
                    <div
                    className='cancel-button'
                    >
                    No</div>
                </div>
            </div>
    );
};

export default DeleteNote;