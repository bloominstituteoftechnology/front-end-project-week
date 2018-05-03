import React from 'react';
import axios from 'axios';

import Form from './Form';

const Create = () => {
  let props = {
    button: 'Add Note',
    action: addNewNote,
  }
  return(
    <div className="flex-container">
      <h2>Create New Note:</h2>
      <Form {...props}/>
    </div>
  );
}
const addNewNote = note => {
  axios.post("http://localhost:5005/notes", note)
    .then(() => window.location = "/")
    .catch(error => console.log(error));
}


export default Create;