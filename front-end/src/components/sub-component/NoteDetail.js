import React, { Component } from "react";
import { Button, Modal, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";

import NoteCard from "./NoteCard";
import "./NoteDetail.css"

export default class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.mainProps.noteArray[this.props.match.params.id],
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log("current set state:", this.props.match.params.id);
    return (
      <div>
        <div className="ModalContainer">
          <Button color="danger" onClick={this.toggle}>
            Delete
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="Modal"
          >
            <ModalHeader toggle={this.toggle}>Delete current Note?</ModalHeader>
            <Link to="/">
              <Button
                color="danger"
                onClick={() => {
                  this.props.mainProps.deleteNote(this.props.match.params.id);
                }}
              >
                Delete
              </Button>
            </Link>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </Modal>
        </div>

        <div>
          <Link to="/edit">
            <Button color="normal">Edit</Button>
          </Link>
        </div>

        <div className="DetailBoxContainer">
          <h2>{this.state.note.title}</h2>
          <div className="ContentBox">{this.state.note.content}</div>
        </div>

        {/* <NoteCard eachNote={this.state.note} /> */}
      </div>
    );
  }
}
