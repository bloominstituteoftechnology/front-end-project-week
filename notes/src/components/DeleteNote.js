import React from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DeleteNote.css';

class DeleteNote extends React.Component {
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
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
          <div className="modul-link" onClick={this.toggle}>delete</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalFooter className="delete-modul">
              <span className="want-to-delete">Are you sure you want to delete this?</span>
            <Link to="/">
              <Button xs="6"className="modul-delete" style={{ backgroundColor: 'rgb(208, 2, 27)'}} onClick={()=>this.props.removeNote(this.props.noteID)}>Delete</Button>{' '}
            </Link>
            <Button xs="6" className="modul-cancel" style={{ backgroundColor:'rgb(43, 193, 196)' }} onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;