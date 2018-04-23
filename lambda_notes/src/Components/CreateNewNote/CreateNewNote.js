import React from 'react';
import './CreateNewNote.css';

import { Form, Input } from 'reactstrap';

const CreateNewNote = () => {
  return (
    <div className="newNoteMainDiv">
      <h6 className="newNoteHeader">Create New Note:</h6>
      <Form className="newNoteFormDiv">
        <Input type="text" placeholder="Note Title" className="titleDiv" />
        <Input
          type="textarea"
          placeholder="Note Content"
          className="contentDiv"
        />
        <button className="saveNewNoteBtn">Save</button>
      </Form>
    </div>
  );
};

export default CreateNewNote;
