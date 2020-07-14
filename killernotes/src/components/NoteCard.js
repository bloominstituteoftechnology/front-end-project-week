import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  font-family: raleway;
  width: 176px;
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
  let { title, content, id } = props.note;

  // only show the first x characters of the title/text
  if (title.length > 13) title = title.slice(0, 10) + ' ...';
  if (content.length > 116) content = content.slice(0, 116) + ' ...';

  return (
    <StyledLink to={`/note/${id}/`}>
      <Card>
        <h2>{title}</h2>
        <hr />
        {content}
      </Card>
    </StyledLink>
  );
};

export default NoteCard;
