import React from 'react';

const DeleteModal = () => {
    return(
        <div className='delete-view'>
            <div>
                <p>Are you sure you want to delete this?</p>
                <button 
                    className='button-style'
                >
                    Delete
                </button>
                <button 
                    className='button-style'
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default DeleteModal;
