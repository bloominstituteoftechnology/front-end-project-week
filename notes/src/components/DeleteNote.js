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
    const externalCloseBtn = <button 
                                className="close" 
                                style={{ position: 'absolute', top: '15px', right: '15px' }} 
                                onClick={this.toggle}
                              >
                              &times;
                              </button>;
    return (
      <div>
        <h5 className="modul-link" onClick={this.toggle}>delete</h5>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalFooter className="delete-modul">
              {/* <div className="want-to-delete">Are you sure you want to delete this?</div> */}
            <Link to="/">
              <Button 
                xs="6"
                 
                style={{ backgroundColor: 'white'}} 
                onClick={()=>this.props.removeNote(this.props.noteID)}
              >
              <img className="delete-button" src="https://cdn4.iconfinder.com/data/icons/generic-interaction/143/close-x-cross-multiply-delete-cancel-modal-error-no-512.png" alt="delete logo"/>
              </Button>{' '}
            </Link>
            <Button 
              xs="6" 
              className="modul-cancel" 
              style={{ backgroundColor:'white' }} 
              onClick={this.toggle}
              >
              Cancel
              </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;