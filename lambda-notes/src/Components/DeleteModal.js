import React, { Component } from "react";
import axios from "axios";
import { Button, Modal,ModalBody, ModalFooter } from "reactstrap";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      isModalOpen: false
    };
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  deleteNote = () => {
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${this.state.id}`)
      .then(res => {
        console.log("note was successfully deleted");
        this.props.history.push('/')})
      .catch(err => console.log(err, "note could not be deleted"));
  };
   render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
    
          <ModalBody>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.deleteNote}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
}



export default DeleteModal;