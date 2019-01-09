import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
class DeleteModal extends React.Component {
  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.id}`)
      .then(res => {
        console.log("Note was successfully deleted");
        this.props.history.push("/");
      })
      .catch(err => console.log(err, "Could not delete note"));
  };

  render() {
    return (
      <div className="DeleteModal">
      <Modal
        isOpen={this.props.isModalOpen}
        toggle={this.props.toggle}
        className="DeleteModal"
        centered="true"
      >
        <ModalBody>Are you sure you want to delete this?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.deleteNote} className="ModalButton" size="lg" block>
            Delete
          </Button>
          <Button color="info" onClick={this.props.toggle} className="ModalButtonNo" size="lg" block>
            No
          </Button>
        </ModalFooter>
      </Modal>
      </div> // Delete Modal ending div
    );
  }
}

export default DeleteModal;
