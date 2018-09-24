import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";

import Form from "../Form";

export default class Note extends Component {
  state = {
    isEditing: false,
    note: null,
    title: "",
    textBody: ""
  };

  get id() {
    return this.props.match.params.id;
  }

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${this.id}`)
      .then(response => {
        this.setState({
          note: response.data,
          title: response.data.title,
          textBody: response.data.textBody
        });
      })
      .catch(error => console.log(error));
  }

  // handle input change
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handle edit submit
  handleEditSubmit = e => {
    e.preventDefault();

    const editedNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };

    axios
      .put(
        `https://killer-notes.herokuapp.com/note/edit/${this.id}`,
        editedNote
      )
      .then(response => {
        this.props.refetchNotes();
        this.setState({
          isEditing: false,
          note: response.data,
          title: response.data.title,
          textBody: response.data.textBody
        });
      })
      .catch(error => console.log(error));
  };

  // turn on the edit mode by changing the isEditing to true
  toggleEditMode = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };

  // open modal
  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  // handle delete
  handleDelete = e => {
    e.preventDefault();

    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.id}`)
      .then(response => {
        this.props.refetchNotes();
        this.setState({
          isEditing: false,
          note: null,
          title: "",
          textBody: ""
        });
      })
      .catch(error => console.log(error));

    this.props.history.push("/");
  };

  render() {
    if (!this.state.note) {
      return <div className="main-container note">Note is loading...</div>;
    }
    // if isEditing then render the form
    if (this.state.isEditing) {
      return (
        <Form
          type={"edit"}
          title={this.state.title}
          textBody={this.state.textBody}
          handleFormSubmit={this.handleEditSubmit}
          handleInputChange={this.handleInputChange}
        />
      );
    }

    return (
      <div className="main-container note">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <h3>Are you sure you want to delete this?</h3>
          <div className="modal-buttons">
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.closeModal}>No</button>
          </div>
        </Modal>
        <div className="actions-container">
          <h5 onClick={this.toggleEditMode}>edit</h5>
        </div>
        <h2>{this.state.title}</h2>
        <div className="note-body">{this.state.textBody}</div>
      </div>
    );
  }
}
