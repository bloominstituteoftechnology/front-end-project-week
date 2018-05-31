import React, { Component } from 'react'
import ActionButton from '../buttons/ActionButton'

const DeleteModal = ({ hidden, deleteNote, hideSelf }) => {
  const display = hidden ? 'hidden' : 'flex'
  return (
    <div className="modal-mat" style={{ display }}>
      <div className="modal-dialog">
        <h5>Are you sure you want to delete this?</h5>
        <div className="controls">
          <ActionButton 
            type='delete'
            text='Delete'
            onClick={deleteNote} />
          <ActionButton
            text='No'
            onClick={hideSelf} />
        </div>
      </div>
    </div>
  )
}

export default DeleteModal