import React from 'react';
import { connect } from 'react-redux';
import './DeleteNoteModal.css';


function DeleteNoteModal(props) {
  return (
    <div className='delete-modal'>
      <div className='box'>
        <div className='title'>Are you sure you want to delete this?</div>
        <div className='buttons'>
          <button onClick={props.deleteNote} className='delete-button'>Delete</button>
          <button onClick={props.cancelDelete} className='cancel-button'>Cancel</button>
        </div>
      </div>
    </div>
  );
}


export default connect()(DeleteNoteModal);