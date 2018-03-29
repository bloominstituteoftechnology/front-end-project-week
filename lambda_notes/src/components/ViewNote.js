import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDelete(event) {
      event.preventDefault();
      this.props.deleteNote(this.props.note.id)
      this.props.history.push("/")
  }

  render() {
    console.log(this.props.note);
    return (
      <div className="Notes">
        <h1>{this.props.note.title}</h1> 
        <p> {this.props.note.content}</p>
        <Link to={`/Update/${this.props.note.id}`} className="LinkClass"> edit </Link>
        <Button color="danger" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody> Are you sure you want to delete?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleDelete.bind(this)}>
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ViewNote);
