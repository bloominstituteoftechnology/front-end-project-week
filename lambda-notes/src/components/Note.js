import React from 'react';
import '../App.css';
import axios from 'axios';
import Form from './Form';

class Note extends React.Component {
  state = {
    isEditing: false,
    note: null,
    title: "",
    textBody: ""
  }

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${this.id}`)
      .then(response => {
        this.setState({ note: response.data,
                        title: response.data.title,
                        textBody: response.data.textBody });
      })
      .catch(error => console.log(error));
  }

  toggleEditMode = e => {
    e.preventDefault();

    this.setState({ isEditing: true });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditSubmit = e => {
    e.preventDefault();

    const editedNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }

    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${this.id}`, editedNote)
      .then(response => {
        this.setState({ isEditing: false,
                        note: response.data,
                        title: response.data.title,
                        textBody: response.data.textBody });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (!this.state.note) {
      return (
        <div>Note is loading...</div>
      )
    }

    if (this.state.isEditing) {
      return (
        <Form title={this.state.title}
              textBody={this.state.textBody}
              handleFormSubmit={this.handleEditSubmit}
              handleInputChange={this.handleInputChange}
        />
      );
    }

    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.textBody}</div>
        <button onClick={this.toggleEditMode}>Edit</button>
      </div>
    )
  }
}

export default Note;
