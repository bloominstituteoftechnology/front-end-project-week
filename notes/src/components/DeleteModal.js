import React from "react";

const DeleteModal = ({ deleteNote, hideModal }) => (
    <div className='delete-modal'>
        <h2>Are you sure you want to delete this?</h2>
        <div className='modal-buttons' >
            
            <button className='btn-delete' type='button' onClick={deleteNote}>
                Delete
            </button>
            <button className='btn' type='button' onClick={hideModal}>
                No
            </button>
        </div>    
    </div>
);

export default DeleteModal;