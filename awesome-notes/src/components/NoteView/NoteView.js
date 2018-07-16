import React from "react";
import styled from "styled-components";
import ContentHeading from "../ContentHeading/ContentHeading";
import CardContainer from "./CardContainer";
import Sample from "../../placeholder JSON/Sample";

const NoteViewWrapper = styled.div`
  width: 610px;
  position: relative;
  top: 0;
  border: 1px solid red;
  margin: 0 auto;
  margin-top: 5rem;
`;

// width: 610px

const NoteView = props => {
  return (
    <NoteViewWrapper>
      <ContentHeading message="Your Notes:" />
      <CardContainer content={Sample} />
    </NoteViewWrapper>
  );
};

export default NoteView;
