import React from 'react'
import './Modal.css'
export const Modal = props => {

  return (
    <div className="modal">
      <div className="modal-content">
        <span class="close" onClick={props.toggle}>&times;</span>
        <button onClick={()=>props.deleteNote(props.note)}>Delete</button>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}