import React, { Component } from 'react';
import { Container, Row, Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from './notesActions';
import { withRouter } from 'react-router-dom';

class NotesForm extends Component {
  state = {
    title: '',
    content: ''
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
              <Input onChange={this.handleInputChange} type="text" name="title" id="noteTitle" placeholder="Note Title" value={this.state.title} />
            </FormGroup>
            <FormGroup>
              <Input onChange={this.handleInputChange} type="textarea" name="content" id="noteContent" placeholder="Note Content" value={this.state.content} />
            </FormGroup>
            <Button type="submit">Save</Button>
          </Form>
        </Row>
      </Container>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      content: ''
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const newNote = this.state;

    newNote[name] = value;

    this.setState({ newNote });
  };
}

const mapStateToProps = state => {
  return state;
};

const actions = {
  addNote
}

export default withRouter(connect(mapStateToProps, actions)(NotesForm));