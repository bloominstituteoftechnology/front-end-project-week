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

  componentDidMount() {
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
        this.props.updateNotes();
        this.setState({ isEditing: false,
                        note: response.data,
                        title: response.data.title,
                        textBody: response.data.textBody });
      })
      .catch(error => console.log(error));
  }

  handleDelete = e => {
    e.preventDefault();

    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.id}`)
      .then(response => {
        this.props.updateNotes();
        this.setState({ isEditing: false,
                        note: null,
                        title: "",
                        textBody: "" });
      })
      .catch(error => console.log(error));

    this.props.history.push("/");
  }

  render() {
    if (!this.state.note) {
      return (
        <div>Note is loading...</div>
      )
    }

    if (this.state.title.length > 30) {
      this.state.title = this.state.title.slice(0, 30) + '...';
    }

    if (this.state.isEditing) {
      return (
        <Form type={"edit"}
              title={this.state.title}
              textBody={this.state.textBody}
              handleFormSubmit={this.handleEditSubmit}
              handleInputChange={this.handleInputChange}
        />
      );
    }

    return (
      <div className="main-container note">
        <div className="actions-container">
          <h5 onClick={this.toggleEditMode}>edit</h5>
          <h5 onClick={this.handleDelete}>delete</h5>
        </div>
        <h2>{this.state.title}</h2>
        <div className="note-body">{this.state.textBody}</div>
      </div>
    )
  }
}

export default Note;
