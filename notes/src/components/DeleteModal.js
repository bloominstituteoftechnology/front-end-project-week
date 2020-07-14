import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class ModalExample extends React.Component {
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

  // handleClick = event => {
  //   event.preventDefault();
  //   console.log('deleteModal', this.props);
  //   this.props.history.push("/notes");
  //   this.props.deleteNote(event);
  // };

  render() {
    console.log("modalProps", this.props);
    return (
      <div className="deleteModal-wrapper">
        <Button className="delete-button" onClick={this.toggle}>
          Delete
        </Button>
        <Modal isOpen={this.state.modal} className="delete-modal">
          <ModalHeader>Are you sure you want to delete this?</ModalHeader>
          <ModalBody>
            <Button
              color="danger"
              onClick={() => this.props.deleteNote(this.props.noteId)}
            >
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
