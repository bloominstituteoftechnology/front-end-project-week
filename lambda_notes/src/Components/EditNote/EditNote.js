import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import './EditNote.css';

class EditNote extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ noteTitle: '', noteContent: '' });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="newNoteMainDiv">
        <h6 className="newNoteHeader">Edit Note:</h6>
        <Form className="newNoteFormDiv">
          <Input
            type="text"
            name="noteTitle"
            placeholder="Note Title"
            className="titleDiv"
            onChange={this.handleChange}
          />
          <Input
            type="textarea"
            name="noteContent"
            placeholder="Note Content"
            className="contentDiv"
            onChange={this.handleChange}
          />
          <button className="saveNewNoteBtn" onClick={this.handleSubmit}>
            Update
          </button>
        </Form>
      </div>
    );
  }
}

export default EditNote;
