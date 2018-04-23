import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import { activateNote, deleteNote } from '../../actions';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      redirect: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.props.activateNote(this.props.match.params.id);
  }

  render() {
    if (this.state.redirect === true) return <Redirect to="/" />;

    return (
      <div>
        <Link to={`/edit/${this.props.match.params.id}`} style={{ color: 'black' }}>
          edit
        </Link>
        <p onClick={this.toggleModal}>delete</p>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalBody>
              <p>Are you sure you want to delete this?</p>
              <Button color="primary" onClick={this.toggleModal}>No</Button>{' '}
              <Button color="secondary" 
              onClick={() => {
              this.props.deleteNote(this.props.match.params.id);
              this.setState({ redirect: true })
                }}>Delete</Button>
            </ModalBody>
          </Modal>
          <h1>{this.props.activeNote.title}</h1>
          <p>{this.props.activeNote.text}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote,
  };
};

export default connect(mapStateToProps, { activateNote, deleteNote })(ViewNote);