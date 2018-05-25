import React from 'react';

// components
import Button from '../misc/Button';
import { Link } from 'react-router-dom';

const DeleteModal = props => {
  const handleModalClassNames = showDeleteModal => {
    if (showDeleteModal) {
      return 'note-action-wrapper__delete-modal-wrapper note-action-wrapper__delete-modal-wrapper--show';
    }
    return 'note-action-wrapper__delete-modal-wrapper';
  };
  
  return (
    <div className={ handleModalClassNames(props.showDeleteModal) }>
      <div>
        <h2>Are you sure you want to delete this?</h2>
      </div>
      <div className='delete-modal-wrapper__button-wrapper'>
        <Link className='button-wrapper__delete-note-link' to='/'>
          <Button
            buttonClassName='delete-note-link__button'
            buttonContent='Delete'
            buttonOnClick={ props.handleDeleteNote }
          />
        </Link>

        <Button
          buttonClassName='button-wrapper__no-button'
          buttonContent='No'
          buttonOnClick={ props.setShowDeleteModal }
        />
      </div>
    </div>
  )
}
 
export default DeleteModal;