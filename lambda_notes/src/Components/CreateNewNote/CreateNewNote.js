import React, { Component } from 'react';
import './CreateNewNote.css';
import { Form, Input } from 'reactstrap';
import axios from 'axios';

class CreateNewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createNote = event => {
    event.preventDefault();
    const title = this.state.title;
    const content = this.state.content;
    axios
      .post(
        'https://peaceful-gorge-48893.herokuapp.com/api/notes',
        {
          username: localStorage.username,
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log({ Error: `Unable to create note: ${err}` });
      });
  };

  render() {
    return (
      <div className="newNoteMainDiv">
        <h6 className="newNoteHeader">Create New Note:</h6>
        <Form className="newNoteFormDiv" onSubmit={this.createNote}>
          <Input
            name="title"
            type="text"
            placeholder="Note Title"
            className="titleDiv"
            onChange={this.handleChange}
          />
          <Input
            name="content"
            type="textarea"
            placeholder="Note Content"
            className="contentDiv"
            onChange={this.handleChange}
          />
          <button className="saveNewNoteBtn">Save</button>
        </Form>
      </div>
    );
  }
}

export default CreateNewNote;
