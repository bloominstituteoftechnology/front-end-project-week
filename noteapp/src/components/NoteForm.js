import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import addNotes from '../actions/NoteActions';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import notestyles from './notestyles.css';

class NoteForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <h4>Create New Note:</h4>
          <Input type="text" placeholder="Note Title" />
          <Input
            type="textarea"
            placeholder="Note Content"
            className="text-area"
          />
          <Link to="/">
            <button className="note-button">Save</button>
          </Link>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const actions = { addNotes };

export default connect(mapStateToProps, actions)(NoteForm);
