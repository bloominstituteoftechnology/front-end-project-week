import React from 'react';

function DeleteModal(props) {
  const {modalState} = props;
  console.log({modalState});

  return(
    <div className={`delete-modal ${modalState ? 'is-open' : 'is-closed'}`}>
      <div className='delete-modal-content-container'>
        <div>Are you sure you want to delete this?</div>
        <div className="button delete">Delete</div>
        <div className="button">No</div>
      </div>
    </div>
  )
}

export default DeleteModal;
