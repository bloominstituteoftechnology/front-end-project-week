import React from 'react';
import { Form } from '../components';

export const CreateNoteView = props => (
  <Form onSubmit={props.onSubmit} action={"Create"} />
);