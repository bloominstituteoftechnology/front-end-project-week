import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class DeleteModal extends Component {
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

  render() {
    return (
      <div>
        <a className="header" onClick={this.toggle}>
          {this.props.buttonLabel}
        </a>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>Are you sure you want to delete this note?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Delete
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

export default connect(mapStateToProps, { deleteNote })(DeleteModal);
