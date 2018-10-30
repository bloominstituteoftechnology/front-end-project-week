
import React from 'react'
// import {Link} from 'react-router-dom'
const DeleteNote = props => {
  return (
      <div >
        <div className='full-page-modal'>
          <div className='modal-div'>
            <h4> Are you sure you want to delete this? </h4>
            <button className='delete-note'>Delete</button>
            {console.log('from delete:', props)}
            <button>No</button>
          </div>
        </div>
      </div>
      );
};
export default DeleteNote;
