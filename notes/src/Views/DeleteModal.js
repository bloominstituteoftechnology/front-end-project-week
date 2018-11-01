import React from 'react';

function DeleteModal(props) {
  const {modalState} = props;
  console.log({modalState});

  const handleDelete = () => {
    props.deleteNote(props.currentId);
  }

  return(
    <div className={`delete-modal ${modalState ? 'is-open' : 'is-closed'}`}>
      <div className='delete-modal-content-container'>
        <div className="delete-modal-content">Are you sure you want to delete this?</div>
        <div className='button-container'>
          <div className="button delete" onClick={handleDelete} >Delete</div>
          <div className="button" onClick={props.modalToggle}>No</div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal;
