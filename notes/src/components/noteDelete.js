import React from 'react';
//import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//import axios from 'axios';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class noteDelete extends React.Component {
  constructor() {
    super();
 
    this.state = {
        notes: [],
        id: "",
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  componentDidMount() {
    this.openModal();
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  
  }
 
  deleteRequest = (id) => {   
    this.closeModal();
    this.props.deleteNote(id);
    this.props.noteList();
  }
 /*  noteDelete = (e) => {
    e.preventDefault();
    const URL = 'https://fe-notes.herokuapp.com/note/delete/' + this.props.id;
    axios
      .delete(URL)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
        this.closeModal();
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  } */
  render() {
    return (
      <div className="div-modal">   
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}   
        >
 
          {<h2 ref={subtitle => this.subtitle = subtitle}>Are you sure you want to delete this?</h2>}
          <button className="delete2-button" onClick={this.deleteRequest(this.props.id)}>Delete</button>
          <button className="cancel-button" onClick={this.closeModal}>Cancel</button> 
          <form className="modal-form">
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
	const { notesReducer } = state;
	return {
	  deletingNote: notesReducer.deletingNote,
	 // error: state.notesReducer.error,
	 // showUpdate: state.singleNoteReducer.showUpdate,
	 // noteSelected: state.singleNoteReducer.noteSelected
	 
	 error: notesReducer.error,
	
	};
  };
  
  export default connect(mapStateToProps, {
	deleteNote,
	  })(noteDelete);
