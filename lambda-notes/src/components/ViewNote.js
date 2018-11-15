import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    console.log(this.props.notes);
    return (
      <div className="pageWrapper">
        <div className="actionButtons">
          <div>edit</div>
          <div onClick={this.toggle}>delete</div>
        </div>
        {this.props.notes.map(note => {
          if (this.props.match.params.id === note._id) {
            console.log(note.title);
            return (
              <div>
                <p className="viewNoteTitle">{note.title}</p>
                <p className="viewNoteBody">{note.textBody}</p>
              </div>
            );
          }
        })}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          {/* <ModalHeader toggle={this.toggle}>Delete Note</ModalHeader> */}
          <ModalBody>
            <p>Are you sure you want to delete this?</p>
            <div>
              <Button color="danger" onClick={this.props.deleteNote}>
                Delete
              </Button>{' '}
              <Button color="primary" onClick={this.toggle}>
                No
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ViewNote;
