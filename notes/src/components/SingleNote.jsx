import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from 'react-modal';


class SingleNote extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }
  openModal =()=> {
    this.setState({modalIsOpen: true});
  }
  closeModal = ()=> {
    this.setState({modalIsOpen: false});
  }
  componentWillMount() {
    Modal.setAppElement('body');
 }
  render() {
    return (
       
        <div className="notesViewContainer">
        <div className="svButtonRow">
          <div className="svButtons">edit </div>
          <div onClick={this.openModal} className="svButtons">delete</div>
        </div>
          <div className="viewTitle">{this.props.title}</div>
          <div className="viewBody">{this.props.body}</div>
          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Delete Modal"
          className="Modal"
        >
        <div className='modalText'>Are you sure you want to delete this?</div>
        <div className='modalButtonRow'>
        <div className='redButton sidebarButton'>Delete</div>
        <div className='sidebarButton'>No</div>
        </div>
        </Modal>
        </div>
    );
  }
}

SingleNote.propTypes = {};

export default SingleNote;
