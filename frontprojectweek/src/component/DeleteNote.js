import React from 'react';
import {Link} from "react-router-dom";

const DeleteNote = ({handleDeleteNote, id}) => {
 
  return (
      <div className='carddelete'>
      <div className='divdelete'>
      <h2 className="card-title">Are you sure ?</h2>
    <h5 className="card-text">You won't be able to revert this!</h5>
    <Link to={`/`}  className="btn2 btn3 btn-danger" onClick={handleDeleteNote(id)} >Yes, delete it</Link>
    <Link to={`/Notes/${id}`}  className="btn2 btn3 btn-primary">Cancel</Link>
      </div>
  </div>
   
  );
};

DeleteNote.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default DeleteNote;
