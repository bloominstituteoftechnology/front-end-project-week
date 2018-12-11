import React from 'react';

function DeleteModal(props) {
  const {deleteModalState} = props;
  console.log({deleteModalState});

  const handleDelete = () => {
    props.deleteNote(props.currentId);
    props.deleteModalToggle();
    window.location.reload();
  }

  return(
    <div className={`delete-modal ${deleteModalState ? 'is-open' : 'is-closed'}`}>
      <div className='delete-modal-content-container'>
        <div className="delete-modal-content">Are you sure you want to delete this?</div>
        <div className='button-container'>
          <div className="button delete" onClick={handleDelete} >Delete</div>
          <div className="button" onClick={props.deleteModalToggle}>No</div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal;
