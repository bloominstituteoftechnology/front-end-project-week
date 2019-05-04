import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './index.css'

const DeleteModal = ({
  USER_ID,
  NOTE_ID,
  modal,
  toggle,
  removeNote
}) => (
  <Modal
    className='modal-cont'
    open={modal}>
    <Modal.Content>
      <Modal.Description className='modal-desc'>
        <h2>Are you sure you want to delete this note?</h2>
      </Modal.Description>
      <Modal.Actions className='modal-btn-sect'>
        <Button
          as={Link}
          className='milano-red modal-btn'
          to={`/${USER_ID}`}
          onClick={() => removeNote(USER_ID, NOTE_ID)}>
          Yes
        </Button>
        <Button
          className='pacific-blue modal-btn'
          onClick={toggle}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal.Content>
  </Modal>
)

DeleteModal.propTypes = {
  USER_ID: PropTypes.string.isRequired,
  NOTE_ID: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired
}

export default DeleteModal