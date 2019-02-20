import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "reactstrap";
import { connect } from "react-redux";

import { getOneNote, deleteNote } from "../actions/noteActions";

class BigNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  triggerModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  clickHandler = () => {
    const note = this.props.notes.find(item => {
      return item.id === Number(this.props.match.params.id);
    });
    this.props.deleteNote(note.id);
    this.props.history.push("/NoteList");
    this.triggerModal();
  };

  render() {
    const singleNote = this.props.notes.find(item => {
      return item.id === Number(this.props.match.params.id);
    });
    return (
      <div className="bigNote">
        <Modal
          isOpen={this.state.modal}
          triggerModal={this.triggerModal}
          className={this.props.className}
        >
          <h3>Are you sure you want to delete this?</h3>
          <Button color="danger" onClick={this.clickHandler}>
            Delete
          </Button>
          <Button color="info" onClick={this.triggerModal}>
            No
          </Button>
        </Modal>
        <div className="big-note-btns">
        <Link to={`/update/${singleNote.id}`} className="edit-btn">edit</Link>
        <a className="delete-btn" onClick={this.triggerModal}>
          delete
        </a>
        </div>
        <h1 className="big-note-content">{singleNote.title}</h1>
        <p className="big-note-content">{singleNote.textBody}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { getOneNote, deleteNote }
)(BigNote);
