import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Methods ********************************************
 **************************************************************************************************/
const shortenText = (text, limitCharsDisplayed) => {
  if (text.length > limitCharsDisplayed) {
    return text.slice(0, limitCharsDisplayed);
  }
  return text;
};

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivNoteSticky = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid red;
`;
const H3NoteTitle = styled.h3``;
const NoteText = styled.p``;
const SpanElipsis = styled.span`
  color: gray;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const NoteSticky = props => {
  return (
    <DivNoteSticky>
      <H3NoteTitle>
        {shortenText(props.title, 20)} <SpanElipsis>. . .</SpanElipsis>
      </H3NoteTitle>
      <NoteText>
        {shortenText(props.textBody, 180)} <SpanElipsis>. . .</SpanElipsis>
      </NoteText>
    </DivNoteSticky>
  );
};

// NoteSticky.defaultProps = {
//   name: '',
// };

export default NoteSticky;
