import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter, Col, Row } from "reactstrap";

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
    // console.log('note:', this.state.note);
    return (
      <div>
        <Row>
          <Col sm={{ size: 8, offset: 4 }}>
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
              <button>edit</button>
            </Link>

            {/* ______DELETE NOTE MODAL HERE______ */}
            <Button color="danger" onClick={this.toggle}>
              delete
            </Button>
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

            {/* ______ACTUAL NOTE TITLE+CONTENT______ */}
            <h3>{this.state.note.title}</h3>
            <p>{this.state.note.content}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
