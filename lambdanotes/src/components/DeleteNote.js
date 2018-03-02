import React from 'react';
import { Link } from 'react-router-dom';

import './DeleteNote.css';

const DeleteNote = props => {
  return (
    <div className="DeleteModal">
      <div className="DeleteModal-Box">
        <p>Are you sure you want to delete this?</p>
        <Link to={"/"}><button type="button" onClick={() => {props.handleDeleteNote(props.id)}} className="DeleteModal-Box-Delete">Delete</button></Link>
        <button type="button" onClick={() => {props.toggleModal()}} >No</button>
      </div>
    </div>
  );
}

export default DeleteNote;
