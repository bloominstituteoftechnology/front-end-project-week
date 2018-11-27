import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Alert } from 'reactstrap';

const Modal = styled.div`
  display: block;
  width: 450px;
  max-width: 100%;
  height: 150px;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  left: 60%;
  top: 60%;
  margin: -200px 0 0 -200px;
  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.1);
  
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.2);
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

const ButtonOne = styled.div`
  background-color: #2bc1c4;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  text-decoration: none;
  margin-bottom: 50px;
  margin-top: 6px;
  width: 140px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: bolder;
  border-style: solid;
  border-color: #979797;
  border-width: 0.5px;
 
`;

const ButtonTwo = styled.div`
  background-color: #d0021b;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  text-decoration: none;
  margin-bottom: 20px;
  margin-top: 6px;
  margin-right:10px;
  margin-left:20px;

  width: 140px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: bolder;
  border-style: solid;
  border-color: #979797;
  border-width: 0.5px;
`;

const ButtonNoStyle = {
  background: "none",
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "inherit"
};

const ModalText = {
  fontFamily: "Helvetica",
  fontWeight: "light",
  fontSize: "13px"
};

const ButtonContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: '30px'
};

class DeleteModal extends Component {
  constructor(props) {
    super(props);

    console.log("test", this.props.note_id);
  }

  deleteNote = event => {
    event.preventDefault();
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${this.props.note_id}`
      )
      .then(response => {
        console.log("Success!");
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <ModalOverlay> </ModalOverlay>
        <Modal>
          <ModalGuts>
            <div className="delete-question">
              <h3 style={ModalText}> Are you sure you want to delete this? </h3>
            </div>
            <div style={ButtonContainer}>
              <div className="delete">
                <ButtonTwo>
                  {" "}
                  <button style={ButtonNoStyle} onClick={this.deleteNote}>
                    Delete
                  </button>
                </ButtonTwo>
              </div>
              <div className="do-not-delete" />
              <ButtonOne>
                <button style={ButtonNoStyle} onClick={this.props.onClose}>
                  No
                </button>
              </ButtonOne>
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
