import React from "react";
import styled from "styled-components";
import EditDeleteLinks from "./EditDeleteLinks";
import DeleteModal from "../DeleteModal/DeleteModal";

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
  let deleteClicked = false;
  const DelClickHandler = () => {
    deleteClicked = true;
  };
  return (
    <NoteViewWrapper>
      <EditDeleteLinks currentNote={currentNote} delClicked={DelClickHandler} />
      <ContentHeading message={currentNote.title} />
      <ContentParagraph>{currentNote.textBody}</ContentParagraph>
      {!deleteClicked ? <DeleteModal currentNote={currentNote} /> : null}
    </NoteViewWrapper>
  );
};

export default NoteView;
