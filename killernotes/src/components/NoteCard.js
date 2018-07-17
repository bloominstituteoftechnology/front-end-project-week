import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  font-family: raleway;
  width: 190px;
  height: 195px;
  padding: 8px;
  margin: 8px;
  border: 1px solid #979797;
  background-color: white;
  word-break: break-all;
  > h2 {
    font-family: Roboto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NoteCard = props => {
  let { title, textBody, _id } = props.note;

  // only show the first x characters of the title/text
  if (title.length > 13) title = title.slice(0, 10) + ' ...';
  if (textBody.length > 116) textBody = textBody.slice(0, 116) + ' ...';

  return (
    <StyledLink to={`/note/${_id}/`}>
      <Card>
        <h2>{title}</h2>
        <hr />
        {textBody}
      </Card>
    </StyledLink>
  );
};

export default NoteCard;
