import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import md from 'markdown-it';
import taskLists from 'markdown-it-task-lists';

class ViewNote extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.parser = md().use(taskLists, {enabled: true, label: true});
  }

  handleDelete = () => {
    this.props.deleteNote();
    this.toggleModal();
    this.props.history.push('/');
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  parseContent = () => {
    return this.parser.render(this.props.clickedNote.content);
  }

  render() {
    return (
      <div>
        <div>
          <Row className="mt-4 mb-5">
            <Col>
              <div className="view-note-content">
                <h3>{this.props.clickedNote.title}</h3><br />
                <p dangerouslySetInnerHTML={{__html: this.parseContent()}}></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-3">
              <Link to="/edit-note" className="mr-2"><Button className="btn-size-small btn-info">Edit</Button></Link>
              <a><Button onClick={this.toggleModal} className="btn-size-small btn-info">Delete</Button></a>
              <a className="invisible" onClick={this.handleDelete}>for test only delete</a>
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
