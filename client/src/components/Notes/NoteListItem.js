import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 25%;
  height: 300px;
  border: 1px solid black;
  margin: 2%;
  padding: 1%;
`;
const NoteListItem = ({ title, textBody, _id }) => {
  return (
    <ItemContainer>
      <Link to={`/note/get/${_id}`}>
        <h2>{title}</h2>
        <hr />
      </Link>
      {textBody.length > 100 ? (
        <p> {textBody.substring(0, 100)} ...</p>
      ) : (
        <p>{textBody}</p>
      )}
    </ItemContainer>
  );
};

export default NoteListItem;
