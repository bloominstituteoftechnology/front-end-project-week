import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ModalExample from "./modal";

const SingleNoteContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  height: 100%;
`;

const EditDeleteDiv = styled.div`
  margin-top: 20px;
  margin-left: 80%;
`;

const EditDeleteButton = styled.h4`
padding-top: 15px
text-decoration-line: underline;
display: inline;
margin: 0 7%;
&:hover {
  cursor: pointer;
}
`;

const NoteTitle = styled.h2`
  margin-left: 3%;
  margin-bottom: 35px;
`;

const NoteText = styled.p`
  margin-left: 3%;
`;

class IndividualNote extends Component {
  state = {
    title: "",
    textBody: "",
    id: "",
    modal: false,
    backdrop: true
  };

  componentDidMount() {
    const noteID = this.props.match.params.id;
    this.setState({id: noteID});
    this.getNote(noteID);
    console.log(noteID);
  }

  getNote = noteID => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
      .then(response => {
        this.setState({
          title: response.data.title,
          textBody: response.data.textBody,
          id: response.data._id
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("The note is: " + this.state.id);
  };

  toEdit= () => {
    const noteID = this.props.match.params.id;
    this.props.history.push(`/edit/${noteID}`)}

  delete = () => {
    console.log(this.state.id);
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.state.id}`)
      .then(response => {
        console.log(response);
        this.setState(
          {
            title: response.data.title,
            textBody: response.data.textBody
          },
          () => this.props.history.push("/")
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <SingleNoteContainer>
        <EditDeleteDiv>
          <EditDeleteButton onClick={this.toEdit}>edit</EditDeleteButton>
          <ModalExample props={this.props} id={this.noteID}/>
        </EditDeleteDiv >
        <NoteTitle>{this.state.title}</NoteTitle>
        <NoteText>{this.state.textBody}</NoteText>
        
      </SingleNoteContainer>
    );
  }
}

export default IndividualNote;
