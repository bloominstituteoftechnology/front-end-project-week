import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      toList: false
    };

    // this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  handleDelete = e => {
    e.preventDefault();
    this.setState({ toList: true });
    this.props.deleteNote(this.props.match.params.id);
  };

  render() {
    // console.log(this.props.notes);
    console.log(this.props.match.params.id);
    if (this.state.toList) {
      return <Redirect to="/" />;
    }
    return (
      <div className="pageWrapper">
        <div className="actionButtons">
          <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
          <a onClick={this.toggle}>delete</a>
        </div>
        {this.props.notes.map(note => {
          if (this.props.match.params.id === note._id) {
            console.log(note.title);
            return (
              <div key={note._id}>
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
              <Button color="danger" onClick={this.handleDelete}>
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
