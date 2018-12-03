import React, { Component } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";

import { NoteViewWrapper, NoteWrapper,SingleNoteTitle, SingleNoteText, NoteViewLinks, EditLink, DeleteLink,} from "./Styled";

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
 
  render() {
    return (
      <NoteViewWrapper>
        <NoteWrapper>
        <NoteViewLinks>
          <EditLink
            to={`/note/edit/${this.state.note._id}`}
            key={this.state.note._id}
          >
            edit
          </EditLink>

          <div>delete</div>
        </NoteViewLinks>

        <SingleNoteTitle>{this.state.title}</SingleNoteTitle>
        <SingleNoteText>{this.state.textBody}</SingleNoteText>
        </NoteWrapper>
      </NoteViewWrapper>
    );
  }
}

export default NoteView;
