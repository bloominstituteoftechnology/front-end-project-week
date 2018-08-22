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
        <p className="delete-option" onClick={this.toggle}>delete</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <div className="delete-modal">
          <h3>Are you sure you want to delete this?</h3>
          <div>
            <button className="delete" onClick={() => {this.props.deleteNote(this.props.id)}}>Delete</button>
            <button className="cancel" onClick={this.toggle}>No</button>
          </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;