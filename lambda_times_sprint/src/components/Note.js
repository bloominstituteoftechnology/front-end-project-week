import React, { Component } from 'react';

import axios from 'axios';

import Modal from 'react-modal';
import NoteForm from './NoteForm';

class Note extends Component {
  state = {
    note: null,
    title: '',
    textBody: '',
    isEditing: false,
    modalIsOpen: false
  };


  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  // sets note id to this.id for use in deleting
  get id() {
    return this.props.match.params.id;
  }

  // activates delete modal
  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  // deactivates delete modal
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

// allows us to delete and update state
  handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.id}`)
      .then(response => {
        this.props.fetchNotes();
        this.setState({
          note: response.data,
          title: response.data.title,
          textBody: response.data.textBody
        });
      })
      .catch(error => {
        console.error(error);
      });
    this.props.history.push("/");
  }

  // changes title and textBody on state when an edcit happens
  handleEditInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // allows us to edit and update state
  handleEditNote = e => {
    e.preventDefault();

    const editedNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }

    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${this.id}`, editedNote)
      .then(response => {
        this.props.fetchNotes();
        this.setState({
          note: response.data,
          title: response.data.title,
          textBody: response.data.textBody,
          isEditing: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // allows us to edit the current note
  toggleEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: true });
  }

  render() {
    if (!this.state.note) {
      return (<div>Loading Note...</div>);
    }

    // if edit mode is toggled, it returns the edit form
    const { title, textBody } = this.state.note;
    if (this.state.isEditing) {
      return (
     
        <NoteForm 
          type="edit"
          title={this.state.title}
          textBody={this.state.textBody}
          handleEditNote={this.handleEditNote}
          handleInputChange={this.handleEditInputChange}
        />
      
      );
  } 
  
    return (
      <div className="note-container">
        <Modal isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <h3>Are you sure you want to delete this?</h3>
          <div className="modal-buttons">
            <button className="delete-on-modal" onClick={this.handleDelete}>Delete</button>
            <button className="no-delete-on-modal" onClick={this.closeModal}>No</button>
          </div>
        </Modal>

        <div className="edit-delete-container">
          <h5 onClick={this.toggleEdit}>edit</h5>
          <h5 onClick={this.openModal}>delete</h5>
        </div>

        <h2 className="note-title">{title}</h2>
        <div className="note-text-body">{textBody}</div>

      </div>

    );
  }
}

export default Note;