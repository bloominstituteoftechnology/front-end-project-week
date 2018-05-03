import React from 'react';
import axios from 'axios';

import Form from './Form';

const Edit = props => {
  let items = {
    button: 'Update Note',
    action: updateNote,
    note: props.location.state,
  }
  return(
    <div className="create-note">
      <h2>Edit Note:</h2>
      <Form {...items} />
    </div>
  );
}
const updateNote = note => {
  axios.put(`http://localhost:5005/note/${note.id}`, note)
  .then(() => window.location = '/')
  .catch(error => console.log(error))
}

export default Edit;