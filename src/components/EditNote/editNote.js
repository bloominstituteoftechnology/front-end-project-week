import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';

const EditNoteContainer = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
display: flex; 
flex-direction: column;
`;

const EditNoteTitle = styled.h2`
margin-left: 3%;
margin-top: 50px;
`;

const NoteTitle = styled.input`
height: 40px;
border-radius: 5px;
width: 50%
margin: 10px 0;
margin-left: 3%;
::placeholder{
  padding-left: 3%;
 } 
`;

const TextInput = styled.textarea`
border-radius: 5px;
width: 90%
margin: 10px 0;
margin-left: 3%;
height: 275px;
::placeholder{
  padding-left: 5%;
  padding-top:3%;
 } 
`;

const SaveButton = styled.h3`
  background-color: #00BCBA;
  color: #FFFFFF;
  height: auto;
  width: 18%;
  display: inline-block;
  padding: 10px 15px;
  text-align: center;
  margin-left: 3%;
  border-radius: 5px;
`;


class EditNote extends Component {
  state = {
    title: "",
    textBody: "",
    id: ""
  };

  componentDidMount() {
    const noteID = this.props.match.params.id;
    this.getNote(noteID);
  }

  getNote = (noteID) => {
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
  }

  updateNote = () => {
    const updatedNote = {
      title: this.state.title,
      textBody: this.state.textBody,
      _id: this.state.id
    };
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${this.state.id}`, updatedNote)
      .then(response => {
        console.log(response.data, updatedNote);
      })
      .catch(err => {
        console.log(err);
      });
      this.props.history.push("/")
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log('title is now: ' + this.state.title);
    console.log('TextBody is now: ' + this.state.textBody);
  };

  render() {
    return (
      <EditNoteContainer>
        <EditNoteTitle>Edit Note:</EditNoteTitle>
        <NoteTitle type="text" placeholder={this.state.title} onChange={this.handleInput} name='title'/>
        <TextInput type="text" placeholder={this.state.textBody} onChange={this.handleInput} name='textBody'/>

        <SaveButton onClick={this.updateNote}>update</SaveButton>
      </EditNoteContainer>
    );
  }
}

export default EditNote;
