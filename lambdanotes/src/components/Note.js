import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      modal: false
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
    .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(res => {
      this.setState(() => ({ note: res.data }));
    })
    .catch(err => {
      console.error(err);
    });
  }

  deleteNote = id => {
    axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(() => {this.props.history.push('/')
    })
    .catch(err => {
      console.error(err);          
    });
  } 

  toggleModal = () => {
    this.setState({ modal: !this.state.modal})
  }

  render() {
    if (!this.state.note) {
      return <div>Loading note...</div>;
    }
    return(
      <OneNote>
        <div className='note-container'>
          <div className='note-action'>
            <button className='links' onClick={() => this.props.history.push(`/notes/${this.state.note._id}/edit`)}>edit</button>
            <button className='links' onClick={this.toggleModal}>delete</button>
            {/* <div style={{textDecoration: 'underline'}}onClick={()=> this.deleteNote(this.state.note._id)}>delete</div> */}
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} modalTransition={{ timeout: 200 }}>
              <ModalHeader toggle={this.toggle}>Delete Confirmation</ModalHeader>
              <ModalBody>Are you sure you want to delete this?</ModalBody>
              <ModalFooter>
                <button className='delete' onClick={()=> this.deleteNote(this.state.note._id)}>Delete</button>
                <button className='cancel' onClick={this.toggleModal}>No</button>
              </ModalFooter>
            </Modal>
          </div>
          <h3>{this.state.note.title}</h3>
          <p>{this.state.note.textBody}</p>
        </div>
      </OneNote>
    );
    
  }
}

const OneNote = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1000px;
  min-width: 1000px;
  background-color: #F3F3F3;
  border: 1px solid #BEBEBE;
  padding: 0 30px;

  h3 {
    color: #4A494A;
    margin-top: 50px;
  }

  .note-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .note-action {
    display: flex;
    // justify-content: space-around;
    margin: 20px 10px 0 450px;

    .links {
      margin-right: 20px;
      color: #000000;
    }
  }
`