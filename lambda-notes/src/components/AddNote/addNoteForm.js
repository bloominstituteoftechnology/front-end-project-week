import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";


const NewNoteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start

min-height: 100vh;
height:100%;
width: 90%;
margin: 0 auto;
`;

const NewNoteH1 = styled.h1`
margin-left: 3%;
margin-top: 50px;
`;

const TitleInput = styled.input`
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
  &:hover{
    cursor: pointer;
  }
`;

class AddNoteForm extends Component {
  state = {
    title: "",
    text: ""
  };

  handleSave = () => {
    const newNote = { title: this.state.title, textBody: this.state.text };
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, newNote)
      .then(response => {
        this.setState({ title: "",
        text: ""}, () => this.props.history.push("/"));
      })
      .catch(err => {
        console.log('err');
      });
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name] + event.target.value);
  };
  render() {
    return (
      <NewNoteContainer>
        <NewNoteH1>Create New Note</NewNoteH1>
        <TitleInput
          type="text"
          placeholder="Title"
          className="title-input"
          name="title"
          onChange={this.handleInput}
        />
        <TextInput
          type="textarea"
          placeholder="Note Content"
          name="text"
          onChange={this.handleInput}>
        </ TextInput>
        <SaveButton onClick={this.handleSave}>Save</SaveButton>
      </NewNoteContainer>
    );
  }
}

export default AddNoteForm;
