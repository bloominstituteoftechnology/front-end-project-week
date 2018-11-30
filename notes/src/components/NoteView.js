import React from "react";


import { NoteCardTitle, NoteCardText, NoteViewLinks } from "./Styled";

const NoteView = props => {
  return (
    <div>
      <NoteViewLinks>
        <div>edit</div>
        <div>delete</div>
      </NoteViewLinks>

      <NoteCardTitle>{props.title}</NoteCardTitle>
      <NoteCardText>{props.textBody}</NoteCardText>
    </div>
  );
};

NoteView.defaultProps = {
  title: "",
  textBody: ""
};

export default NoteView;
