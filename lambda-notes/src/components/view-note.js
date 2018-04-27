import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote, setHome } from '../REDUX/actions';
import { Button, Modal, ModalBody } from 'reactstrap';

class ViewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      deleteModal: false
    }
  }

  componentDidMount() { this.props.setHome(false) }

  toggleModal = () => { this.setState({ deleteModal: !this.state.deleteModal }) }

  handleDelete = id => {
    this.toggleModal();
    this.props.deleteNote(id);
  }

  render() {
    const { note } = this.props.location.state.viewNote;
    return (
      <div className="PrimaryContainer__newNote"> 
        <div className="ViewNote__editOptions">
          <Link to={{ pathname: `/edit/${note.id}`, state: { note: note } }} className="ViewNote__editOptions--click">edit</Link>
          <button onClick={() => this.toggleModal()} className="ViewNote__editOptions--button">delete</button>
        </div>
        <h1 className="PrimaryContainer__header">{note.title}</h1>
        <div className="ViewNote__content">{note.content}</div>

        {this.state.deleteModal ? (
          <Modal isOpen={this.state.deleteModal}>
            <ModalBody className="Modal__header">Are you sure you want to delete this?</ModalBody>
            <div className="Modal__ButtonsContainer">
              <Link to="/home" onClick={() => this.handleDelete(note.id)} className="Modal__button--link">
                <Button color="danger" className="Modal__button--link--reg">Delete</Button>
              </Link>
              <Button color="primary" onClick={() => this.toggleModal()} className="Modal__button--reg">No</Button>
            </div>
          </Modal>
        ) : null}

      </div>
    )
  }
}

export default connect(null, { deleteNote, setHome })(ViewNote);
