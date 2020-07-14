
import React from 'react'
// import {Link} from 'react-router-dom'
const DeleteNote = props => {
  return (
      <div >
          <div className='modal-div'>
            <h4> Are you sure you want to delete this? </h4>

            <button 
              onClick={(event) => props.prepareToDelete(event, props.match.params.id)}
              className='delete-note'>Delete</button>

            {console.log('from delete:', props.history.goBack)}
            <button
              onClick={() => {props.history.goBack()}}
            >No</button>
          </div>
        <div className='full-page-modal'>
        </div>
      </div>
      );
};
export default DeleteNote;
