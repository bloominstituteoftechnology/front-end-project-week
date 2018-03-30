import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { editNote, deleteNote } from './notesActions';
import { withRouter, Link } from 'react-router-dom';
import './Note.css';

class Note extends Component {
  state = {
    note: {},
    modal: false
  };

  render() {
    return (
      <Container>
        <Col className='container'>
          <Row className='links'>
            <Link to={`/note/edit/${this.state.note.id}`}>edit</Link>

            <Link onClick={this.toggle} to={`/note/${this.state.note.id}`}>Delete</Link>

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalBody>
                Are you sure you want to delete this?
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={this.handleDelete}>Delete</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>No</Button>
              </ModalFooter>
            </Modal>

          </Row>
          <Row className='title'>
            {this.state.note.title}
          </Row>
          <Row className='content'>
            {this.state.note.content}
          </Row>
        </Col>
      </Container >
    );
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  handleDelete = () => {
    this.props.deleteNote(this.state.note.id);
    this.setState({ modal: false, note: {} });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const notes = this.props.notes;
    const currentNote = notes[id - 1];

    this.setState({ note: currentNote });
  }
}

const mapStateToProps = state => {
  return state;
};

const actions = {
  editNote,
  deleteNote
};

export default withRouter(connect(mapStateToProps, actions)(Note));