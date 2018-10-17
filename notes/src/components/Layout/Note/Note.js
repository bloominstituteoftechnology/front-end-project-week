import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, note: {} };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentDidMount() {
    axios
      .get(
        `https://killer-notes.herokuapp.com/note/get/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState({ note: response.data });
      });
  }
  handleDelete = () => {
    axios
      .delete(
        `https://killer-notes.herokuapp.com/note/delete/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        window.location.replace("/notes");
      });
  };
  render() {
    return (
      <div>
        <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
        <p onClick={this.toggle}>delete</p>
        <h1>{this.state.note.title}</h1>
        <p>{this.state.note.textBody}</p>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>Are you sure you want to delete this?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleDelete}>
              DELETE
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Note;
