import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  width: 170px;
  height: 30px;
  border: grey solid 1px;
  color: white;
  text-align: center;
  background-color: #2AC0C4;
  margin-bottom: 20px;
  font-size: 1.4rem;
  font-weight: bold;
  &:hover {
    cursor:pointer;
  }
`;

const AddNoteFormContainer = styled.div`
  padding: 2%;
  background-color: rgb(230,230,230);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const HeaderTwo = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  justify-content: row-start;
  align-items: flex-end;
  height: 60px;
`;

const InputTitle = styled.input`
  width: 60%;
  height: 30px;
  margin-bottom: 10px;
  ::-webkit-input-placeholder { text-align:left; }
`;

const InputBodyText = styled.input`
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
`;

function assignButtonText(currentView){
  if(currentView === "add"){
    return "Save";
  }else{
    return "Update";
  }
}

function assignHeaderText(currentView){
  if(currentView === "add"){
    return "Create New Note:";
  }else{
    return "Edit Note:";
  }
}

class NoteForm extends React.Component {

  //***you will need to figure out how to handle tag vs tags input field***
  constructor(props) {
    console.log('**** note form props *****');
    console.log(props);
    super(props);
    this.state = {
      tags: [],
      title: '',
      textBody: '',
      currentView: props.currentView, //add note or edit note
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addNote({
      tags: this.state.tags,
      title: this.state.title,
      textBody: this.state.textBody,
    });
  };

  onClick = event => {
    //this.state.props.addNote();
  }

  render() {
    if(this.state.currentView === "add" || this.state.currentView === "edit"){
      return (
        <AddNoteFormContainer>
          <HeaderTwo>{assignHeaderText(this.state.currentView)}</HeaderTwo>
          <form onSubmit={this.submitHandler}>
            <InputTitle
              onChange={this.changeHandler}
              type="text"
              name="title"
              value={this.state.title}
              placeholder="title.."
            />
            <InputBodyText
              onChange={this.changeHandler}
              type="text"
              name="textBody"
              value={this.state.textBody}
              placeholder="note text.."
            />
            <Button onClick={this.onClick} >
              {assignButtonText(this.state.currentView)}
            </Button>
          </form>
        </AddNoteFormContainer>
      );
    }else if(this.state.currentView === "note"){ //is "note"
      //add JSX for note display including edit + delete buttons
    }else{
      //display note with delete overlaid
    }
  }
}

export default NoteForm;