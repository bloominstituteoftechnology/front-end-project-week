import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const DeleteNoteContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmNoteContainer = styled.div`
  border: 2px solid #6e6e6e;
  background-color: white;
  width: 70%;
  height: 250px;
  text-align: center;
`;

const ConfirmNoteMessage = styled.p`
  margin: 65px 0 30px 0;
  color: #4a4a4a;
  font-size: 1.2rem;
`;

const ConfirmNoteLink = styled(Link)`
  text-decoration: none;
`;

const ConfirmNoteButton = styled.span`
  display: inline-block;
  margin: 0 10px;
  padding: 15px 0;
  font-size: 1.2rem;
  border: 1px solid #abb5b5;
  width: 40%;
  color: white;
  font-weight: bold;
`;

const DeleteButton = styled(ConfirmNoteButton)`
  background-color: #c02828;
`;

const NoDeleteButton = styled(ConfirmNoteButton)`
  background-color: #5dbec3;
`;

class DeleteNote extends Component {
  deleteNote = e => {
    e.preventDefault();
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.props.refreshMain();
      })
      .catch(err => console.log(err));
    this.setState({
      title: "",
      textBody: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <DeleteNoteContainer>
        <ConfirmNoteContainer>
          <ConfirmNoteMessage>
            Are you sure you want to delete this?
          </ConfirmNoteMessage>
          <ConfirmNoteLink to={`/`} onClick={this.deleteNote}>
            <DeleteButton>Delete</DeleteButton>
          </ConfirmNoteLink>
          <ConfirmNoteLink to={`/notes/${this.props.match.params.id}`}>
            <NoDeleteButton>No</NoDeleteButton>
          </ConfirmNoteLink>
        </ConfirmNoteContainer>
      </DeleteNoteContainer>
    );
  }
}

export default DeleteNote;
