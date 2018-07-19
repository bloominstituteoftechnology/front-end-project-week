import React from 'react';
import Form from '../Form';

const CreateNewView = props => {
  return (
    <main className="create-new-view">
      <h2>Create New Note</h2>
      <Form buttonText='Save' onSubmitNote={props.onSubmitNote} />
    </main>
  );
};

export default CreateNewView;