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
        <div className="header-link" onClick={this.toggle}>
          {this.props.buttonLabel}
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody className="text-center">
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className="d-flex justify-content-around ">
            <Button className="w-50" color="danger" onClick={this.toggle}>
              Delete
            </Button>{" "}
            <Button className="w-50" color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, { deleteNote })(DeleteModal);
