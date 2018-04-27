import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { delete_note } from '../../Actions/index.js';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import './DeleteNote.css';

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div >
        <button onClick={this.toggle} className='link'>Delete</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Link to='/' className='link' onClick={() => this.props.delete_note(this.props.id)}>Delete</Link>
            <button className='link' onClick={this.toggle}>No</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { delete_note })(DeleteNote);