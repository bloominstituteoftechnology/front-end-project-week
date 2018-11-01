import React from 'react'
import './Modal.css'
export const Modal = props => {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.toggle}>&times;</span>
        <button onClick={props.delete}>Delete</button>
      </div>
    </div>
  )
}