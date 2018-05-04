import React from 'react';
import axios from 'axios';

import Form from './Form';

export default () => {
  let props = {
    button: 'Add Note',
    action: addNewNote,
  }
  return(
    <div className="flex-container">
      <div className="title">
        <h2>Create New Note:</h2>
      </div>
      <Form {...props}/>
    </div>
  );
}
const addNewNote = note => {
  axios.post("http://localhost:5005/notes", note)
    .then(() => window.location = "/")
    .catch(error => console.log(error));
}

