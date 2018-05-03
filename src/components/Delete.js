import React from 'react';
import './Delete.css';


function Delete(props) {

  
  return (
    <div className='Note'>
      <div className='box'>
        <div className='title'>Are you sure you want to delete this?</div>
        <div className='deletebuttons'>
          <button onClick={props.deleteNote} className='delete'>Delete</button>
          <button onClick={props.cancelDelete} className='cancel'>Cancel</button>
        </div>
      </div>
    </div>
  );
}


export default Delete; 
    