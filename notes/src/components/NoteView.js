import React, { Component } from "react";
import axios from "axios";
import {
  NoteViewWrapper,
  NoteWrapper,
  SingleNoteTitle,
  SingleNoteText,
  ModifyNoteWrapper,
  ModifyNoteLink
} from "./Styled";

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      id: ''
    };
  }

  componentDidMount() {
    console.log('TEST')
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(res => {
        console.log(res, "check res");
        this.setState({ textBody: res.data.textBody, title: res.data.title, id: res.data._id });
      })
      .catch(err => console.log(err));
  }


  deleteNote = id => {
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${
          this.state.id
        }`
      )
      .then(res => {
        console.log("note was successfully deleted");
        this.props.history.push('/')})
      .catch(err => console.log(err, "note could not be deleted"));
  };

  render() {
    return (
      <NoteViewWrapper>
        <NoteWrapper>
          <ModifyNoteWrapper>
            <ModifyNoteLink
          to={`/note/edit/${this.state.id}`}
             
            >
              edit
            </ModifyNoteLink>
            <div onClick={this.deleteNote}>delete
            </div>
          </ModifyNoteWrapper>

          <SingleNoteTitle>{this.state.title}</SingleNoteTitle>
          <SingleNoteText>{this.state.textBody}</SingleNoteText>
        </NoteWrapper>
      </NoteViewWrapper>
    );
  }
}

export default NoteView;
