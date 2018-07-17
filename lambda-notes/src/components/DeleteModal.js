import React from 'react';

const DeleteModal = props => {
    return (
        <div className="DeleteModal-container">
            <div className="DeleteModal-modal">
                <div className="DeleteModal-header">
                    <h2>Are you sure you want to delete this?</h2>
                </div>
                <div className="DeleteModal-buttons">
                    <button onClick={() => props.handleDelete(props.id)}>Delete</button>
                    <button onClick={props.toggleDelete}>No</button>
                </div>
            </div>
        </div>
    );

};

export default DeleteModal;