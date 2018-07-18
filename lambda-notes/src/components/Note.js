import React, { Component } from "react";
import axios from "axios";
import CreateNote from "./CreateNote";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      title: "",
      textBody: "",
      edit: false,
      deleted: false,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:4444/notes/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          note: res.data,
          title: res.data.title,
          textBody: res.data.textBody
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  editNote = () => {
    this.setState({ edit: true });
  };

  deleteNote = () => {
    axios
      .delete(`http://localhost:4444/notes/${this.state.note.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ deleted: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return this.state.deleted ? (
      <Redirect to="/notes" />
    ) : this.state.edit ? (
      <CreateNote
        edit={true}
        note={this.state.note}
        title={this.state.title}
        textBody={this.state.textBody}
      />
    ) : (
      <div className="note">
        <div className="editdeletebuttons">
          <a onClick={this.editNote}>edit</a>
          <a onClick={this.openModal}>delete</a>
        </div>
        <h3 className="">{this.state.title}</h3>
        <div>
          <div className="">{this.state.textBody}</div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              Are you sure you want to delete this?
            </h2>
            <button onClick={this.deleteNote}>Delete</button>
            <button onClick={this.closeModal}>No</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Note;
