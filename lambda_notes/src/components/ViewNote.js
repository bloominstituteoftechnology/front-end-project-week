import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './ViewNote.css'
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
      <div className="detailedNotes">
      <div className="editDeleteNav">
        <Link className="detailLink" to={`/Update/${this.props.note.id}`}> edit </Link>
        <button className="deleteBtn" onClick={this.toggle}>delete</button>
        </div>
        <div className="detailNoteContent">
               <div className="h1Style">{this.props.note.title}</div>
               <div className="pStyle"> {this.props.note.content}</div>
        </div>
        
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete</ModalHeader>
          <ModalBody> Are you sure you want to delete?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleDelete.bind(this)}>delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        
        {/* <Modal className="modal" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody> Are you sure you want to delete?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleDelete.bind(this)}>
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal> */}


      </div>
    );
  }
}

export default withRouter(ViewNote);
