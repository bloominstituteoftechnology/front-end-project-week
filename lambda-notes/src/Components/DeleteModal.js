import React, { Component } from "react";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter, } from "reactstrap";

class DeleteModal extends Component {
 
  deleteNote = () => {
    console.log("deleteNote executed")
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${this.props.id}`)
      .then(() => {
        console.log("note was successfully deleted");
        console.log(this.props.history, "history not executed")
        this.props.history.push('/')}) 
      .catch(err => console.log(err, "note could not be deleted"));
  };

   render() {
     console.log(this.props, "this.props")
    return (
        <Modal
          isOpen={this.props.isModalOpen}
          toggle={this.props.toggle}
        >
    
          <ModalBody>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteNote} size="lg">
              Delete
            </Button>
            <Button color="secondary" onClick={this.props.toggle} size="lg">
              No
            </Button>
          </ModalFooter>
        </Modal>
    );
  }
  
}



export default DeleteModal;