import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Form from "../Form";
import { getNote, getNotes, editNote, deleteNote } from "../../Actions";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      modalIsOpen: false,
      title: "",
      body: ""
    };
  }
  // sets note id to this.id
  getId() {
    return this.props.match.params.id;
  }

  // fetches note from API and passes it to store
  componentDidMount() {
    console.log("component did mount, fires");
    this.props.getNote(this.getId());
  }

  // allows current note to be edited
  toggleEditMode = e => {
    e.preventDefault();
    this.setState({
      isEditing: true,
      title: this.props.note[0].title,
      body: this.props.note[0].body
    });
  };

  // adjusts state of title and textBody whenever there is new input
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // sends edited note to server, turns off edit mode, resets state with contents of new note
  handleEditSubmit = e => {
    e.preventDefault();
    this.props.editNote({
      id: this.getId(),
      title: this.state.title,
      body: this.state.body
    });
    this.setState({
      isEditing: false,
      title: this.props.note.title,
      body: this.props.note.body
    });
  };

  // opens delete modal
  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  // closes delete modal
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  // sends delete request to API then redirects to home page
  handleDelete = e => {
    e.preventDefault();
    this.props.deleteNote(this.getId());
    this.props.history.push("/api/all");
  };

  render() {
    // if notes are not yet loaded into store, return empty div
    if (!this.props.note) {
      return <div className="main-container note" />;
    }

    // if edit is chosen, render the edit form
    if (this.state.isEditing) {
      return (
        <Form
          type={"edit"}
          title={this.state.title}
          body={this.state.body}
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
          <h5 onClick={this.openModal}>delete</h5>
        </div>
        {/* trims note title if another student hasn't set a maxLength on their title input */}
        <h2>
          {this.props.note[0].title.length > 30
            ? this.props.note[0].title.slice(0, 30) + "..."
            : this.props.note[0].title}
        </h2>
        <div className="note-body">{this.props.note[0].body}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note
  };
};

export default connect(
  mapStateToProps,
  { getNote, getNotes, editNote, deleteNote }
)(Note);
