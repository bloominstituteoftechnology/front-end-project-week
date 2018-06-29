import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteNote } from "../../Actions";
import { Button, Modal, ModalBody } from "reactstrap";

class DeleteNote extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDeleteNote(event) {
    event.preventDefault();
    this.props.deleteNote(this.props.toDelete);
  }

  render() {
    return (
      <div>
        <div>
          <span
            onClick={this.toggle}
            className="atag"
            style={{
              textDecoration: "underline",
              color: "black",
              fontSize: "1.3rem"
            }}
          >
            delete
          </span>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody className="modal-body">
            <p>Are you sure you want to delete this?</p>
            <p>
              <Link to="/home">
                <Button
                  style={{
                    backgroundColor: "#D0021B",
                    border: "1px solid #979797",
                    fontSize: "1.4rem"
                  }}
                  className="CreateViewButton"
                  onClick={this.handleDeleteNote}
                >
                  Delete
                </Button>{" "}
              </Link>
              <Button
                style={{
                  backgroundColor: "#2BC1C4",
                  border: "1px solid #979797",
                  fontSize: "1.4rem"
                }}
                className="CreateViewButton"
                onClick={this.toggle}
              >
                No
              </Button>
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteNote }
)(DeleteNote);
