import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-modal";
import Markdown from "react-markdown";

const api = "https://adamsnotes.herokuapp.com/api/notes/";
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      showModal: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`${api}${id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(res => console.log(res));
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  deleteNoteHelper = e => {
    e.preventDefault(e);
    this.props.deleteNote(e, this.state.note.id);
    this.props.history.push("/");
  };

  render() {
    if (!this.state.note) {
      return <div>loading note</div>;
    }
    const { noteTitle, noteBody, id } = this.state.note;
    return (
      <div>
        <div className="edit-delete-container">
          <Link className="rr-link" to={`/edit/${id}`}>
            <p className="edit-note-link">edit</p>
          </Link>
          <p className="delete-note-link" onClick={this.openModal}>
            delete
          </p>
        </div>
        <div>
          <h3>{noteTitle}</h3>
          <Markdown>{noteBody}</Markdown>
        </div>
        <div>
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.closeModal}
            contentLabel="Are you sure you want to delete?"
          >
            <div className="modal">
              <div className="modal-prompt">
                <p>Are you sure you want to delete this?</p>
              </div>
              <div className="modal-button-container">
                <Link className="rr-link" to="/">
                  <div className="modal-delete-button" onClick={this.deleteNoteHelper}>
                    Delete
                  </div>
                </Link>
                <div className="modal-no-button" onClick={this.closeModal}>
                  No
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(Note);

/* <div
  onClick={e => {
    this.props.deleteNote(e, _id);
  }}
>
  delete
</div>; */
