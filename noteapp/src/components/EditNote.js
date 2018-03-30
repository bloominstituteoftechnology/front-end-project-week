import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const EditNote = () => {
  return (
    <Form>
      <FormGroup>
        <h4>Create Edit Note:</h4>
        <Input type="text" placeholder="Note Title" />
        <Input
          type="textarea"
          placeholder="Note Content"
          className="text-area"
        />
        <Link to="/">
          <button className="note-button">Update</button>
        </Link>
      </FormGroup>
    </Form>
  );
};

export default EditNote;
