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
  return (
    <NoteViewWrapper>
      <EditDeleteLinks />
      <ContentHeading message={props.selected.title} />
      <ContentParagraph>{props.selected.textBody}</ContentParagraph>
    </NoteViewWrapper>
  );
};

export default NoteView;
