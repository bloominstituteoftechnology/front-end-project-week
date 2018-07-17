import React from 'react';

const DeleteModal = props => {
    return (
        <div className="DeleteModal-container">
            <div className="DeleteModal-header">
                <h2>Are you sure you want to delete this?</h2>
            </div>
            <div className="DeleteModal-buttons">
                <button>Delete</button>
                <button>No</button>
            </div>
        </div>
    );

};

export default DeleteModal;