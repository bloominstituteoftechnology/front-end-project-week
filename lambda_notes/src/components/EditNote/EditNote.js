import React from 'react';
import { Link } from 'react-router-dom';

const EditNote = () => {
  return (
    <div className="EditNote">
      <h2>Edit Note: </h2>
      <input type="text" placeholder="Note Title"/>
      <textarea rows="20" cols="50" placeholder="Note Content">
      </textarea>
      <Link to="/"><button>Update</button></Link>
    </div>
  )
}

export default EditNote;