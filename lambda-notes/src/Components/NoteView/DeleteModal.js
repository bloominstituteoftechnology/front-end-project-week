import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DeleteModal.css';
import NoteContainer from '../NoteContainer/NoteContainer';
import SingleNoteView from './SingleNoteView';



class DeleteModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      console.log("deletemodal", this.state);
      return (
        <div className = "delete-click-link">
          <div onClick={this.toggle}>delete</div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="delete-modal">
            <ModalHeader>Are you sure you want to delete this note?</ModalHeader>
            <ModalFooter>
              <Link to = "/list" component = {NoteContainer}><Button className = "delete-button" onClick={this.toggle}>Delete</Button></Link>
              <Link to = "/list/number" component={SingleNoteView}><Button className = "cancel-button" onClick={this.toggle}>No</Button></Link>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default DeleteModal;