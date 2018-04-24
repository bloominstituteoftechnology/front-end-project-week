import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NoteView.css";

class NoteView extends Component {
  state = {
    note: this.props.notes.find(x => x.id === Number(this.props.match.params.id)),
    delete: this.props.delete,
    modalActive: false
  }

  toggleModal = () => {
    this.setState({modalActive: !this.state.modalActive});
  }

  render() {
    return (
      <div className="NoteView-container">
        <div className="NoteView-link-container">
          <Link className="NoteView-edit-link" to={`/edit/${this.state.note.id}`}>edit</Link>
          <div className="NoteView-delete-link" onClick={this.toggleModal}>delete</div>
        </div>
        <h2 className="NoteView-title">{this.state.note.title}</h2>
        <p className="NoteView-content">{this.state.note.content}</p>
        <div className={`NoteView-delete-modal-background${this.state.modalActive ? "" : " NoteView-delete-modal-toggle"}`} />
        <div className={`NoteView-delete-modal-container${this.state.modalActive ? "" : " NoteView-delete-modal-toggle"}`}>
          <div className="NoteView-delete-modal-text">
            Are you sure you want to delete this?
          </div>
          <div className="NoteView-delete-modal-btn-container">
            <Link className="NoteView-delete-modal-link" to="/notes"><div className="NoteView-delete-modal-confirm" onClick={() => this.state.delete(this.state.note.id)}>Delete</div></Link>
            <div className="NoteView-delete-modal-reject" onClick={this.toggleModal}>No</div>
          </div>
        </div>
      </div>
    );
  }
};

export default NoteView;
