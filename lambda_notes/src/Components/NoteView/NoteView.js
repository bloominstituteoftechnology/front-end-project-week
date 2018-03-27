import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './NoteView.css';

class NoteView extends Component {
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
      <div className="noteDiv">
        <div className="noteViewNav">
          <Link
            to={`/notes/${this.props.location.state.currentNote.id}/EditNote`}
            className="editLink"
          >
            edit
          </Link>
          <div className="deleteLink" onClick={this.toggle}>
            delete
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="deleteModal"
            centered
          >
            <ModalHeader toggle={this.toggle}>
              Are you sure you want to delete this?
            </ModalHeader>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>
                Delete
              </Button>{' '}
              <Button onClick={this.toggle} className="delModalBtnNo">
                No
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <h3 className="noteTitleView">
          {this.props.location.state.currentNote.title}
        </h3>
        <p className="noteContentView">
          {this.props.location.state.currentNote.text}
        </p>
      </div>
    );
  }
}

export default NoteView;
