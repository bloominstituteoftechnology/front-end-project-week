import React from 'react';
import styled from 'styled-components';
import NoteList from '../components/NoteList';
import RegisterAndLoginView from './RegisterAndLoginView';

const ListViewContainer = styled.div`
  text-align: left;
  background: #f3f3f3;
  width: 75%;
`;

const TitleContainer = styled.div`
  padding-top: 85px;
  font-size: 1.4rem;
  padding-left: 4%;
`;

const ListView = props => {
  return (
    <ListViewContainer>
      <TitleContainer>
        <h2>Your Notes:</h2>
      </TitleContainer>

      <NoteList />
    </ListViewContainer>
  );
};

export default ListView;
