import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import axios from 'axios';
import './EditNote.css';

class EditNote extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: '',
    };
  }

  componentDidMount() {
    this.setState({
      noteTitle: this.props.location.state.currentNote.title,
      noteContent: this.props.location.state.currentNote.content,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.setState({ noteTitle: '', noteContent: '' });
    const title = this.state.noteTitle;
    const content = this.state.noteContent;
    const id = this.props.location.state.currentNote._id;
    axios
      .put(
        'https://peaceful-gorge-48893.herokuapp.com/api/notes/' + id,
        { title, content },
        {
          headers: {
            Authorization: localStorage.token,
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(response => {
        console.log({
          Message: `Do you feel the need? The need for speed!?`,
          response,
        });
      })
      .catch(err => {
        console.log({ Error: `Highway to the Danger Zone`, err });
      });
    this.props.history.push('/list');
  };

  render() {
    return (
      <div className="newNoteMainDiv">
        <h6 className="newNoteHeader">Edit Note:</h6>
        <Form className="newNoteFormDiv">
          <Input
            type="text"
            name="noteTitle"
            value={this.state.noteTitle}
            className="titleDiv"
            onChange={this.handleChange}
          />
          <Input
            type="textarea"
            name="noteContent"
            value={this.state.noteContent}
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
