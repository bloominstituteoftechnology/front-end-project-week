import React from 'react';
import { Form } from '../components';

export const CreateNoteView = props => (
  <Form 
    {...props} 
    action={"Create"} 
    formTitle={"Create new note:"}
    />
    );
    // onSubmit={props.onSubmit} 