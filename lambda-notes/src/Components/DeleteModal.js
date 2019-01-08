import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
class DeleteModal extends React.Component {
  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.id}`)
      .then(res => {
        console.log("note was successfully deleted");
        this.props.history.push("/");
      })
      .catch(err => console.log(err, "note could not be deleted"));
  };

  render() {
    return (
      <div className="DeleteModal">
      <Modal
        isOpen={this.props.isModalOpen}
        toggle={this.props.toggle}
        className="DeleteModal"
      >
        <ModalBody>Are you sure you want to delete this?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.deleteNote} className="ModalButton" size="xl">
            Delete
          </Button>
          <Button color="#f3f7f6" onClick={this.props.toggle} className="ModalButton" size="xl">
            No
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}

export default DeleteModal;
