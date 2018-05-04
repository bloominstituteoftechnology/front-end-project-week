// React
import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { delete_note } from '../actions';

// Styling
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import './DeleteNote.css';
const btnDeleteColor = '#D0021B';

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
        <button onClick={this.toggle} className='link-secondary mx-2'>delete</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Link to='/' className='link' style={{backgroundColor: btnDeleteColor }} onClick={() => this.props.delete_note(this.props.id)}>Delete</Link>
            <button className='link pt-0' onClick={this.toggle}>No</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  } // end render()
} // end DeleteNote

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { delete_note })(DeleteNote);