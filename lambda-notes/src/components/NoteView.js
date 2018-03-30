import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './NoteView.css';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      modal: false,
      fireRedirect: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting notes: ${error}`);
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDelete = id => {
    axios
      .delete(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.setState({ fireRedirect: true });
        this.setState({ note: response.data });
      })
      .catch(error => {
        console.log(`There was an error deleting note: ${error}`);
      });
  };

  render() {
    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    return (
      <div className="container">
        <div className="modify-buttons">
          <Link to={`/editnote/${this.state.note.id}`}>
            <h5 className="edit-button">edit</h5>
          </Link>
          <div>
            <h5 className="delete-button" onClick={this.toggle}>
              delete
            </h5>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="modal-lg"
            >
              <ModalBody className="lead d-flex justify-content-center">
                Are you sure you want to delete this?
              </ModalBody>
              <ModalFooter className="lead d-flex justify-content-center">
                <div className="modal-button-left">
                  <Button
                    className="btn-lg modal-delete"
                    onClick={() => this.handleDelete(this.state.note.id)}
                  >
                    Delete
                  </Button>
                </div>

                <Button className="btn-lg modal-no" onClick={this.toggle}>
                  No
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        <div className="note-view">
          <h4 className="heading">{this.state.note.title}</h4>
          <p className="content">{this.state.note.content}</p>
        </div>
        {fireRedirect && <Redirect to={from || '/'} />}
      </div>
    );
  }
}

export default NoteView;
