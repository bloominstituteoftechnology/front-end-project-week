import React from "react";
import styled from "styled-components";
import EditDeleteLinks from "./EditDeleteLinks";

import ContentHeading from "../ContentHeading/ContentHeading";

const NoteViewWrapper = styled.div`
  width: 610px;
  position: relative;
  top: 0;
  margin: 0 auto;
  margin-top: 7rem;
`;

const ContentParagraph = styled.p``;

const NoteView = props => {
  // console.log("NOTE VIEW PROPS", props);
  let currentNote = props.content.find(x => x._id === props.match.params._id);
  return (
    <NoteViewWrapper>
      <EditDeleteLinks currentNote={currentNote} />
      <ContentHeading message={currentNote.title} />
      <ContentParagraph>{currentNote.textBody}</ContentParagraph>
    </NoteViewWrapper>
  );
};

export default NoteView;
