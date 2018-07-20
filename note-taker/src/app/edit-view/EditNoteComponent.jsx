import React, { Component, Fragment } from "react";
import HeadingTitle from "../common/Titles/HeadingTitle";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";
import withNoteForm from "../common/Forms/WithNoteForm";

const GeneralBtnWithNoteForm = withNoteForm(GeneralBtn);

class EditNoteComponent extends Component {
  constructor(props) {
    super(props);
    
  this.id = this.props.match.params.id;
  }
  componentDidMount() {
    this.props.fetchNote(this.id);
  }

 
 
  updateNote = (id, noteObj) => {
    this.props.updateNote(id, noteObj);
  };
  render() {
    if(this.props.fetchingNote === true) {
      return <div>One moment please wait for form to be auto-filled</div>
    }
    else {
    return (
      <Fragment>
        <HeadingTitle>Edit Note:</HeadingTitle>
        <GeneralBtnWithNoteForm 
        routeTo = {`/note/get/${this.id}`} 
        btnText = 'Update Note'
        btnHandlers = {(title, textBody) => {
          this.updateNote(this.id, {
            tags: [],
            title,
            textBody
          });
        }}
        id = {this.id}
        textBody = {this.props.textBody}
        title = {this.props.title}
        />
      </Fragment>
    );
  }
}
}

export default EditNoteComponent;
