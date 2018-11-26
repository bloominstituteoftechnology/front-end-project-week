import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = styled.div`
display: block;
width: 600px;
max-width: 100%;
height: 200px;
max-height: 100%;
position: fixed;
z-index: 100;
left: 50%;
top: 50%;
margin: -200px 0 0 -200px;
background: white;
box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
`;

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 50;
background: rgba(0, 0, 0, 0.6);
`;

const ModalGuts = styled.div`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 50px 20px 20px;
`;


class DeleteModal extends Component {
  constructor(props) {
    super(props);

    console.log("test",this.props.note_id);
  }

  deleteNote = event => {
    event.preventDefault();
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${
          this.props.note_id
        }`
      )
      .then(response => {
        console.log("Success!");
        
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div>
      <ModalOverlay> </ModalOverlay>
       
  <Modal>
    <ModalGuts>

        <div className="delete-question">
          <h3> Are you sure you want to delete this? </h3>
        </div>
        <div className="delete">
          <button onClick={this.deleteNote}>Delete</button>
        </div>
        <div className="do-not-delete">
        
          <button onClick={this.props.onClose} >No</button>
        </div>
        </ModalGuts>
        </Modal>
    
     
      </div>
    );
  }
}

DeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default DeleteModal;
