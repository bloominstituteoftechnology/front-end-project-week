import React, { Component } from 'react';
import { Container, Row, Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { editNote } from './notesActions';
import { withRouter } from 'react-router-dom';

class NotesForm extends Component {
  state = {
    properties: {
      title: '',
      content: ''
    },
    id: 0
  }

  render() {
    return (
      <Container>
        <Row>
          <h3>Edit Note:</h3>
        </Row>
        <Row>
          <Form onSubmit={this.handleSubmit} >
            <FormGroup>
              <Input onChange={this.handleInputChange} type="text" name="title" id="noteTitle" placeholder="Note Title" value={this.state.properties.title} />
            </FormGroup>
            <FormGroup>
              <Input onChange={this.handleInputChange} type="textarea" name="content" id="noteContent" placeholder="Note Content" value={this.state.properties.content} />
            </FormGroup>
            <Button type="submit">Update</Button>
          </Form>
        </Row>
      </Container>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const notes = this.props.notes;
    const note = notes[id - 1];
    const updates = {
      title: note.title,
      content: note.content
    };

    this.setState({ properties: updates, id })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.properties.title && this.state.properties.content) {
      this.props.editNote(this.state.id, this.state.properties);
      this.setState({
        properties: {
          title: '',
          content: '',
        }
      });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const updateWith = this.state.properties;

    updateWith[name] = value;

    this.setState({ properties: updateWith });
  };
}

const mapStateToProps = state => {
  return state;
};

const actions = {
  editNote
}

export default withRouter(connect(mapStateToProps, actions)(NotesForm));