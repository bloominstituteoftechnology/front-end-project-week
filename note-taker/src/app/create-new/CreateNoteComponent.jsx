import React, { Component } from "react";
import "bulma/css/bulma.css";
import HeadingTitle from "../common/Titles/HeadingTitle";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";
import withNoteForm from "../common/Forms/WithNoteForm";

const GeneralBtnWithNoteForm = withNoteForm(GeneralBtn);

class CreateNoteComponent extends Component {
  
  
  postNote = (noteObj) => {
    this.props.postNote(noteObj);
  }
  render() {
    return (
      <div>
        <HeadingTitle>Create new note:</HeadingTitle>
        <GeneralBtnWithNoteForm 
        routeTo = {`/`} 
        btnText = 'Save Note'
        btnHandlers = {(noteObj) => {
          this.postNote(noteObj)
          }} />
        
      </div>
    );
  }
}

export default CreateNoteComponent;
