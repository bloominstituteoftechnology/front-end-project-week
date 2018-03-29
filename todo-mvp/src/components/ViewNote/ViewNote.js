import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './ViewNote.css';

  
class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

  this.toggle = this.toggle.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    this.props.deleteNote(this.props.note.id);
    this.props.history.push('/');
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return <div className="ViewNote">
        <div className="note-form">
          <Link className="note-update" to={`/update/${this.props.note.id}`}>
            Update
          </Link>
          <button onClick={this.toggle}>
            Delete
          </button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              Are you sure you want to delete this?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.handleDelete}>
                Delete
              </Button> 
              <Button color="success" onClick={this.toggle}>
                No
              </Button>
            </ModalFooter>
          </Modal>

        </div>
        <h2 className="note-title">{this.props.note.title}</h2>
        <p className="note-content">{this.props.note.content}</p>
      </div>;
  }
}

export default withRouter(ViewNote);