import React from 'react';

import './DeleteNote.css';

const DeleteNote = props => {
  return (
    <div className="DeleteModal">
      <div className="DeleteModal-Box">
        <p>Are you sure you want to delete this?</p>
        <button>Delete</button>
        <button>No</button>
      </div>
    </div>
  );
}

export default DeleteNote;
