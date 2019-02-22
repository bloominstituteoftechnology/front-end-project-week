import React from 'react';


const DeleteModal = props => {
  const id = props.match.params.id;
    const deleteIt = () => {
      props.deleteNote(id);
      props.history.push('/notes');
    };

  const cancelDelete = () => {
    props.history.push(`/${id}`);
  }

  return (
    <div className='delete-modal'>
    <h4>Are you sure you want to delete this?</h4>
    <button className='button yes-button' onClick={deleteIt}>Delete</button>
    <button className='button no-button' onClick={cancelDelete}>No</button>
    </div>
  )
}

export default DeleteModal;
