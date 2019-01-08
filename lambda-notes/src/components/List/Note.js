import React from "react";
import '../../Styles/Notes.css';
import {NoteDiv,NoteH2,BorderDiv,NoteText,NoteContentDiv} from "../../Styles/NoteViewStyles";
import { withRouter } from "react-router-dom";

const Note = props => {
  const { title, textBody, tags } = props.note;

  const routeToNote = ev => {
      ev.preventDefault();
    props.history.push(`/Home/${props._id}`);
  };
  return (
    <NoteDiv className="Note" onClick={ev => routeToNote(ev, props._id)}>
      <NoteContentDiv>
        <NoteH2>{title}</NoteH2>
        <BorderDiv />
        <NoteText className="Text">{textBody}</NoteText>
      </NoteContentDiv>
      <NoteContentDiv className="Tags">
        <span>Tags: {tags}</span>
      </NoteContentDiv>
    </NoteDiv>
  );
};

export default withRouter(Note);