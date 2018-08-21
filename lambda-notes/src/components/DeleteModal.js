import React from 'react';
import { Modal } from 'reactstrap';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <p onClick={this.toggle}>delete</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <h3>Are you sure you want to delete this?</h3>
          <div>
            <button onClick={() => {this.props.deleteNote(this.props.id)}}>Delete</button>
            <button onClick={this.toggle}>No</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;