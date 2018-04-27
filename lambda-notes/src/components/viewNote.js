import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ViewNote extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleDelete = () => {
    this.props.deleteNote();
    this.toggleModal();
    this.props.history.push('/');
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        <div>
          <Row>
            <Col className="col-3 ml-auto">
              <Link to="/edit-note" className="m-3">edit</Link>
              {/* this anchor cannot have href or else after delete, page will refresh and deleted card will reappear */}
              <a onClick={this.toggleModal}>delete</a>
              <a className="invisible" onClick={this.handleDelete}>for test only delete</a>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3>{this.props.clickedNote.title}</h3><br />
              <p>{this.props.clickedNote.content}</p>
            </Col>
          </Row>
        </div>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Delete Note</ModalHeader>
          <ModalBody className="text-center">
            <p>Are you sure you want to delete <strong>Note: {this.props.clickedNote.title}</strong>?</p>
            <Button onClick={this.handleDelete} className="btn-size btn-danger mr-4">Delete</Button>
            <Button onClick={this.toggleModal} className="btn-size btn-info">No</Button>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}

export default withRouter(ViewNote);
