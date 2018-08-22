import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Note extends React.Component {
  constructor(props) {
    super(props);
    const id = parseInt(props.match.params.id,10);
    const note = props.notes.find(note => {
      return note.id === id;
    });
    this.state = {
      id: id,
      note: note,
      deleteHandler: props.deleteHandler,
      showModal: false
    }
  }

  deleteHandler = e => {
    this.state.deleteHandler(e, this.state.id);
    this.props.history.push('/');
  }

  toggle = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className='note-view'>
        <div className='note-links'>
          <Link to={`/edit/${this.state.id}`}><p>edit</p></Link>
          <p onClick={this.toggle}>delete</p>
        </div>
        <div className='note-content'>
          <h5>{this.state.note.title}</h5>
          <p>{this.state.note.text}</p>
        </div>
        <Modal isOpen={this.state.showModal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Delete Note</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this note?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteHandler}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Note;
