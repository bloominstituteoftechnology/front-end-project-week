import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

import "./NoteDetail.css";
import EditNote from "./EditNote";

export default class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.mainProps.noteArray[this.props.match.params.id],
      modal: false,
      isInEditMode: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // console.log("current set state:", this.props.match.params.id);
    return (
      <div>
        {this.state.isInEditMode ? (
          <EditNote secondProps={this.props} />
        ) : (
          <div>
            <div className="ModalContainer">
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className="Modal"
              >
                <div className="ModalTitle">
                  <div>
                    <h5> Delete current Note?</h5>
                  </div>
                </div>

                <div className="DeleteNoteButton">
                  <div>
                    <Link to="/"style={{ textDecoration: 'none' }}>
                      <Button
                        color="danger"
                        onClick={() => {
                          this.props.mainProps.deleteNote(
                            this.props.match.params.id
                          );
                        }}
                      >
                        Delete
                      </Button>
                    </Link>
                  </div>
                  <div className="ButtonMargin">
                    <Button color="secondary" onClick={this.toggle}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="DetailBoxContainer">
              <div className="TitleWrapper">
                <div className="DetailTitle">
                  <h1>{this.state.note.title}</h1>
                </div>
                <div className="ButtonWrapper">
                  <div className="ButtonContainer">
                    <Button
                      className="btn-sm"
                      color="secondary"
                      onClick={() => {
                        this.setState({
                          isInEditMode: !this.state.isInEditMode
                        });
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div className="ButtonContainer">
                    <Button
                      className="btn-sm"
                      color="danger"
                      onClick={this.toggle}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
              <div className="Divider" />
              <div className="ContentBox">
                <h5>{this.state.note.content}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
