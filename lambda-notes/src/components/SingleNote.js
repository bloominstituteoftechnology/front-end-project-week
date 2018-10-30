// React import
import React, { Component } from 'react';
// CSS import
import './SingleNote.css';
// React Router import
import { withRouter, Link } from 'react-router-dom';
// Modal import
import ReactModal from 'react-modal';

// Binds modal to app for accessability
ReactModal.setAppElement('#root');
class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  deleteNote = () => {
    this.handleCloseModal();
    this.props.deleteNote(this.props.note._id);
    this.props.history.push('/');
  };

  render() {
    const { title, textBody } = this.props.note;
    return (
      <div className="singleNote">
        <Link to={`/edit-note-form/${this.props.note._id}`}>
          <span className="modify">Edit</span>
        </Link>
        <span className="modify" onClick={this.handleOpenModal}>
          Delete
        </span>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay">
          <p>Are you sure you want to delete this</p>
          <button onClick={this.deleteNote} className="delete">
            Delete
          </button>
          <button onClick={this.handleCloseModal} className="no">
            No
          </button>
        </ReactModal>
        <h3>{title}</h3>
        <p>{textBody}</p>
      </div>
    );
  }
}

export default withRouter(SingleNote);
