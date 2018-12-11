import React from "react";
import {
  NoteDiv,
  NoteH2,
  BorderDiv,
  NoteText,
  NoteContentDiv
} from "../../Styles/NoteViewStyles";
import { withRouter } from "react-router-dom";
import Markdown from 'react-markdown'

const Note = props => {
  const { title, textBody, tags } = props.note;

  const routeToNote = ev => {
      ev.preventDefault();
    props.history.push(`/Home/${props.id}`);
  };
  return (
    <NoteDiv onClick={ev => routeToNote(ev, props.id)}>
      <NoteContentDiv>
        <NoteH2>{title}</NoteH2>
        <BorderDiv />
        <NoteText><Markdown source={textBody}/></NoteText>
      </NoteContentDiv>
      <NoteContentDiv>
        <span>tags: {tags}</span>
      </NoteContentDiv>
    </NoteDiv>
  );
};

export default withRouter(Note);
