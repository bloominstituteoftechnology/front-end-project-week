import React from 'react';
import styled from 'styled-components';
import NoteList from '../components/NoteList';

const ListViewContainer = styled.div`
  border: 1px solid purple;
  width: 100%;
  background: #f3f3f3;
`;

const ListView = props => {
  return (
    <ListViewContainer>
      <h2>Your Notes:</h2>
      <NoteList />
    </ListViewContainer>
  );
};

export default ListView;
