import React from 'react';
import { Form } from '../components';

export const EditNoteView = props => (
  <Form 
    {...props} 
    onSubmit={note => {
      note['id'] = props.match.params.id
      console.log('submit wrapper', note)
      props.onSubmit(note)
    }} 
    action={"Update"} 
    formTitle={"Create new note:"}
  />
);