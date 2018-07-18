import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  padding: 1.5%;
  margin: 2%;
  background: #fff;
`;

const Title = styled(Link)`
  font-size: 28px;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 20px;
`;

const NoteListItem = ({ title, textBody, _id }) => {
  return (
    <ItemContainer>
      <Title to={`/note/get/${_id}`}>
        {title}
        <hr />
      </Title>
      {textBody.length > 100 ? (
        <Content> {textBody.substring(0, 100)} ...</Content>
      ) : (
        <Content>{textBody}</Content>
      )}
    </ItemContainer>
  );
};

export default NoteListItem;
