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
`;

const NoteCard = props => {
  let { textBody } = props.note;
  if (textBody.length > 116) textBody = textBody.slice(0, 116) + ' ...';
  return (
    <Card>
      {props.note.title}
      <hr />
      {textBody}
    </Card>
  );
};

export default NoteCard;
