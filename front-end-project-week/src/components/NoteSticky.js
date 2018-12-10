import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const maxTitleLimit = 20;
const maxTextBodyLimit = 180;

/***************************************************************************************************
 ********************************************** Methods ********************************************
 **************************************************************************************************/
const shortenText = (text, limitCharsDisplayed) => {
  let modifiedText = text;
  if (modifiedText.length > limitCharsDisplayed) {
    modifiedText = modifiedText.slice(0, limitCharsDisplayed);
    if (modifiedText.indexOf(' ') >= 0) {
      modifiedText = modifiedText.slice(0, modifiedText.lastIndexOf(' '));
      modifiedText = modifiedText.trim() + ' ';
    }
  }
  return modifiedText;
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
const SpanEllipsis = styled.span`
  color: gray;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const NoteSticky = props => {
  return (
    <DivNoteSticky>
      <H3NoteTitle>
        {shortenText(props.title, maxTitleLimit)}{' '}
        {props.title.length > maxTitleLimit && (
          <SpanEllipsis>. . .</SpanEllipsis>
        )}
      </H3NoteTitle>
      <NoteText>
        {shortenText(props.textBody, maxTextBodyLimit)}{' '}
        {props.textBody.length > maxTextBodyLimit && (
          <SpanEllipsis>. . .</SpanEllipsis>
        )}
      </NoteText>
    </DivNoteSticky>
  );
};

// NoteSticky.defaultProps = {
//   name: '',
// };

export default NoteSticky;
