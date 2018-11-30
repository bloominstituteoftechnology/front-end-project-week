import React from "react";

import { NoteCardTitle, NoteCardText } from "./Styled";

const NoteView = props => {
  return (
    <div>
      <div>
        <span>edit</span>
        <span>delete</span>
      </div>

      <NoteCardTitle>{props.note.title}</NoteCardTitle>
      <NoteCardText>{props.note.textBody}</NoteCardText>
    </div>
  );
};

NoteView.defaultProps = {
  title: "",
  textBody: ""
};

export default NoteView;
