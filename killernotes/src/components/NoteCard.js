import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  fontfamily: raleway;
  width: 190px;
  height: 195px;
  padding: 8px;
  margin: 8px;
  border: 1px solid #979797;
  background-color: white;
  word-break: break-all;
  > h2 {
    font: Roboto;
  }
`;

const NoteCard = props => {
  let { textBody } = props.note;
  if (textBody.length > 116) textBody = textBody.slice(0, 116) + ' ...';
  return (
    <Card>
      <h2>{props.note.title}</h2>
      <hr />
      {textBody}
    </Card>
  );
};

export default NoteCard;
