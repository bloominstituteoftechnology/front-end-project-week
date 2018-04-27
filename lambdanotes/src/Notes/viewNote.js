import { Component } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Modal, ModalFooter, ModalBody } from "reactstrap";

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
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  getNote = id => {
    axios
      .get(`http://localhost:5000/notes`)
      .then(response => {
        let data = response.data.find(function(element) {
          return element.id === id;
        });
        if (data) {
          alert("Note not found");
        } else {
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
    return (
      <div>
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
        <button className="noteView__button" onClick={this.toggle}>
          delete
        </button>
        <h4 className="noteView__title">{this.state.note.title}</h4>
        <p className="noteView__content">{this.state.note.text}</p>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>Are you sure you want to delete this?</ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button
                color="danger"
                onClick={() => this.deleteNote(this.state.note.id)}
              >
                Delete
              </Button>
            </Link>{" "}
            <Button color="info" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}