import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Button, ModalBody, ModalFooter } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

export default class DeleteModal extends Component {
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
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-dialog-centered"
        >
          <ModalBody className="text-center p-5">
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className="d-flex justify-content-around pb-5 ">
            <Button color="danger" className="w-50 ml-5 mr-2">
              Delete
              {/* <Link className="deleteBtn" to={`/`}>Delete</Link>{" "} */}
            </Button>{" "}
            <Button
              color="info"
              className="w-50 mr-5 ml-2"
              onClick={this.toggle}
            >
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
