import React from "react";
import styled from "styled-components";
import TextTruncate from "react-text-truncate";

const NoteWrapper = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  border: 1px solid black;
  align-items: left;
  padding: 1% 2.5%;
  width: 30%;
  cursor: pointer;
  margin-bottom: 4%;
  height: 250px;

  &:hover {
    border: 1px solid blue;
    box-shadow: 3px -1.5px black;
  }

  p {
    margin: 0;
    margin-top: 5%;
    height: auto;
  }
`;

const HeaderWrap = styled.div`
  height: 50px;
  width: 100%;
  h2 {
    margin: 0;
    font-weight: bold;
    border-bottom: 1px solid #000000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const WrappedText = styled(TextTruncate)`
  line-height: 2rem;
`;

const SmallNote = props => {
  return (
    <NoteWrapper
      key={props.note._id}
      onClick={() => props.history.push(`/notes/${props.note._id}`)}
    >
      <HeaderWrap>
        <h2>{props.note.title}</h2>
      </HeaderWrap>
      <WrappedText line={5} truncateText="…" text={props.note.textBody} />
    </NoteWrapper>
  );
};

export default SmallNote;
