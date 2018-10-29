import React from 'react';
import styled from 'styled-components';
import NoteList from '../components/NoteList';

const ListViewContainer = styled.div`
  border: 1px solid purple;
  width: 100%;
`;

const ListView = props => {
  return (
    <ListViewContainer>
      <NoteList />
    </ListViewContainer>
  );
};

export default ListView;
