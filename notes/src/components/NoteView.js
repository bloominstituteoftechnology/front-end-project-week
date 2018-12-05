import React, { Component } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";

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
      note: {}
    };
  }

  componentDidMount() {
    console.log(this.props, "check params");
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(res => {
        console.log(res, "check res");
        this.setState({ textBody: res.data.textBody, title: res.data.title });
      })
      .catch(err => console.log(err));
  }

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log("note was successfully deleted");
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "note could not be deleted"));
  };

  render() {
    return (
      <NoteViewWrapper>
        <NoteWrapper>
          <ModifyNoteWrapper>
            <ModifyNoteLink
              to={`/note/edit/${this.state.note._id}`}
              key={this.state.note._id}
            >
              edit
            </ModifyNoteLink>

            <ModifyNoteLink onClick={this.deleteNote} to={`/note/delete/${this.state.note._id}`} key={this.state.note._id}>
              delete
            </ModifyNoteLink>
          </ModifyNoteWrapper>

          <SingleNoteTitle>{this.state.title}</SingleNoteTitle>
          <SingleNoteText>{this.state.textBody}</SingleNoteText>
        </NoteWrapper>
      </NoteViewWrapper>
    );
  }
}

export default NoteView;
