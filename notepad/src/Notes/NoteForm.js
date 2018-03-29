import React, { Component } from 'react';
import { Container, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from './notesActions';

class NotesForm extends Component {
  state = {
    title: '',
    content: '',
    key: ''
  }

  render() {
    return (
      <Container>
        <Row>
          <h3>Create New Note:</h3>
        </Row>
        <Row>
          <Form onSubmit={this.handleSubmit} >
            <FormGroup>
              <Input onChange={this.handleInputChange} type="title" name="title" id="noteTitle" placeholder="Note Title" />
            </FormGroup>
            <FormGroup>
              <Input onChange={this.handleInputChange} type="textarea" name="content" id="noteContent" placeholder="Note Content" />
            </FormGroup>
            <Button>Save</Button>
          </Form>
        </Row>
      </Container>
    );
  }

  handleSubmit = (event) => {

  }

  handleInputChange = (event) => {

  }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

const actions = {
  addNote
}

export default connect(mapStateToProps, actions)(NotesForm);