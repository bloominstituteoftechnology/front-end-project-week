import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Form from './Form';
import Modal from 'react-modal';
import { getNote, getNotes, editNote, deleteNote } from '../actions';

class Note extends React.Component {
  state = {
    isEditing: false,
    modalIsOpen: false,
    title: "",
    textBody: ""
  }

  get id() {
    return this.props.match.params.id;
  }

  componentDidMount() {
    this.props.getNote(this.id);
  }

  toggleEditMode = e => {
    e.preventDefault();
    this.setState({ isEditing: true,
                    title: this.props.note.title,
                    textBody: this.props.note.textBody });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditSubmit = e => {
    e.preventDefault();
    this.props.editNote({ id: this.id, title: this.state.title, textBody: this.state.textBody });
    this.setState({ isEditing: false,
                    title: this.props.note.title,
                    textBody: this.props.note.textBody });
  }

  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteNote(this.id);
    this.props.history.push("/");
  }

  render() {
    if (!this.props.note) {
      return (
        <div className="main-container note"></div>
      )
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
        <Modal isOpen={this.state.modalIsOpen}
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
          <h5 onClick={this.openModal}>delete</h5>
        </div>
        <h2>{this.props.note.title.length > 30 ?
             this.props.note.title.slice(0, 30) + '...' :
             this.props.note.title}</h2>
        <div className="note-body">{this.props.note.textBody}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.note,
    updating: state.updating
  }
}

export default connect(mapStateToProps, { getNote, getNotes, editNote, deleteNote })(Note);
