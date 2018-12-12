import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ModalExample from "./modal";

const SingleNoteContainer = styled.div`
  width: 80%;
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
    title: "eohg",
    textBody: "gdfhfg",
    id: "",
    modal: false,
    backdrop: true
  };

  componentDidMount() {
    const noteID = this.props.match.params.id;
    this.setState({id: noteID}, () => console.log('state: ' + this.state.id));
    this.getNote(noteID);

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
      })
      .catch(err => {
        console.log(err);
      });
      console.log('id: ' + this.state.id);
      console.log('title: ' + this.state.title);
      console.log('text: ' + this.state.textBody)
  };

  toEdit= () => {
    const noteID = this.props.match.params.id;
    this.props.history.push(`/edit/${noteID}`)}
    
    delete = () => {
      console.log('delete fired')
      axios
        .delete(`https://killer-notes.herokuapp.com/note/delete/${this.state.id}`)
        .then(response => {
          console.log(response);
          
        })
        .catch(err => {
          console.log(err);
        });
        this.props.history.push('/')
    };
  

  render() {
    return (
      <SingleNoteContainer>
        <EditDeleteDiv>
          <EditDeleteButton onClick={this.toEdit}>edit</EditDeleteButton>
          <ModalExample props={this.props} id={this.props.match.params.id} delete={this.delete}/>
        </EditDeleteDiv >
        <NoteTitle>{this.state.title}</NoteTitle>
        <NoteText>{this.state.textBody}</NoteText>
        
      </SingleNoteContainer>
    );
  }
}

export default IndividualNote;
