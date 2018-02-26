import React from 'react';
import { Link } from 'react-router-dom';

const CreateNewNote = () => {
  return (
    <div className="NewNote">
      <h2>Create New Note: </h2>
      <input type="text" placeholder="Note Title"/>
      <textarea rows="20" cols="50" placeholder="Note Content">
      </textarea>
      <Link to="/"><button>Save</button></Link>
    </div>
  )
}

export default CreateNewNote;