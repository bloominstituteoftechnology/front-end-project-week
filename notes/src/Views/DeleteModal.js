import React from 'react';

function DeleteModal(id) {
  return(
    <div className='delete-modal'>
      <div className='delete-modal-content-container'>
        <div>Are you sure you want to delete this?</div>
        <div className="button delete">Delete</div>
        <div className="button">No</div>
      </div>
    </div>
  )
}

export default DeleteModal;
