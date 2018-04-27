import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

export default class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  getNote = id => {
    axios
      .get(`http://localhost:5000/notes`)
      .then(response => {
        // fix this!!!!!!!!!!!!!!!
        let data = response.data.find(function(element) {
          return element.id === id;
        });
        if (data) {
          alert("Note not found");
        } else {
          //   console.log("response", response.data[id]);
          this.setState({ note: response.data[id] });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.getNote(newProps.match.params.id);
    }
  }

  deleteNote = id => {
    axios
      .delete(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.props.getNotes();
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log('note:', this.state.note);
    return (
      <div className="noteView__background">
        {/* ______DELETE NOTE MODAL HERE______ */}
        <button className="noteView__button" onClick={this.toggle}>
          delete
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody className="noteView__modalBody">
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className="noteView__modalFooter">
            <Link to="/">
              <button
                className="noteView__modalButton--delete"
                onClick={() => this.deleteNote(this.state.note.id)}
              >
                Delete
              </button>
            </Link>{" "}
            <button className="noteView__modalButton--no" onClick={this.toggle}>
              No
            </button>
          </ModalFooter>
        </Modal>

        {/* ______EDIT NOTE LINK/BUTTON HERE______ */}
        <Link
          to={{
            pathname: "/edit",
            state: {
              note: this.state.note.id,
              getNotes: this.props.getNotes
            }
          }}
        >
          <button className="noteView__button">edit</button>
        </Link>

        {/* ______ACTUAL NOTE TITLE+CONTENT______ */}
        <h4 className="noteView__title">{this.state.note.title}</h4>
        <p className="noteView__content">{this.state.note.content}</p>
      </div>
    );
  }
}
