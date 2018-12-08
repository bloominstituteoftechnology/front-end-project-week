import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
class ModalExample extends React.Component {
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
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalBody>Are you sure you want to delete this?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.deleteNote}>
            Delete
          </Button>
          <Button color="#f3f7f6" onClick={this.props.toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalExample;
