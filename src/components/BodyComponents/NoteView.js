import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteNote } from '../../actions/deleteNote';
import { Modal, ModalBody, Button } from 'reactstrap';

// import DeleteModal from "./DeleteModal";

class NoteView extends Component {
  state = {
    modal: false,
    redirectToHome: false,
    redirectToEdit: false,
  };

  render() {
    let currentNote = this.props.notes.filter(
      item => item._id === this.props.match.params.id
    )[0];

    if (currentNote === undefined) {
      currentNote = {
        _id: 0,
        title: '',
        body: '',
      };
    }

    if (this.state.redirectToHome === true) return <Redirect to="/notelist" />;
    if (this.state.redirectToEdit === true) {
      return <Redirect to={`/editnote/${currentNote._id}`} />;
    }

    return (
      <div>
        <div
          style={{ textDecoration: 'underline' }}
          className="d-flex justify-content-end"
        >
          <div
            className="mr-3"
            onClick={() => this.setState({ redirectToEdit: true })}
          >
            edit
          </div>
          <div onClick={this.toggleModal}> delete </div>
        </div>
        <h3 className="mt-4 ml-3">{currentNote.title}</h3>
        <div className="mt-5 ml-3">
          {currentNote.body
            .split('<br>')
            .map((line, index) => <p key={`line${index + 1}`}>{line}</p>)}
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          {/* <ModalHeader toggle={this.toggle}>Delete note?</ModalHeader> */}
          <ModalBody className="text-center mt-4">
            Are you sure you want to delete this?
          </ModalBody>
          <ModalBody className="d-flex justify-content-center">
            <Button
              color="danger"
              style={{ width: '175px', margin: '10px 10px 20px 10px' }}
              onClick={() => {
                this.props.deleteNote(currentNote._id);
                // this.setState({ redirectToHome: true });
                this.props.history.push('/notelist');
              }}
            >
              Delete
            </Button>{' '}
            <Button
              style={{ width: '175px', margin: '10px 10px 20px 10px' }}
              color="secondary"
              onClick={this.toggleModal}
            >
              No
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};
export default connect(mapStateToProps, { deleteNote })(NoteView);
