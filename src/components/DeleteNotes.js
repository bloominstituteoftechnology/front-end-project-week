import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { deleteNote, updateSelected } from '../actions';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class DeleteNotes extends Component {
  state = {
    modal: false,
    fireRedirect: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleDelete = event => {
    this.props.deleteNote(this.props.id);
    this.setState({ fireRedirect: true });
  };

  componentWillMount = () => {
    this.props.updateSelected(this.props.id);
  };

  render() {
    const note = this.props.notes.find(each => each._id === this.props.id);
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Are you sure you want to delete this?
          </ModalHeader>
          <ModalFooter>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <div className="noteView">
          <div className="note">
            <Link to={`/edit/${this.props.id}`} className="edit">
              edit
            </Link>
            <a className="delete" onClick={this.toggle}>
              delete
            </a>
          </div>
          {this.state.fireRedirect && <Redirect to="/home" />}
          <h5 className="noteTitle">
            {!this.state.fireRedirect ? note.title : null}
          </h5>
          <h5 className="noteContent">
            {!this.state.fireRedirect ? note.text : null}
          </h5>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { deleteNote, updateSelected })(
  DeleteNotes
);
