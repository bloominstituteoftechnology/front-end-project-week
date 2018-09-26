import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import NotesView from '../views/NotesView';
import NoteFormView from '../views/NoteFormView';
import SingleNoteView from '../views/SingleNoteView';

const Routes = () => {
  return (
    <Content>
      <Route exact path="/" component={NotesView} />
      <Route path="/addnote" component={NoteFormView} />
      <Route exact path="/note/:noteId" component={SingleNoteView} />
      <Route
        path="/note/:noteId/edit"
        render={(props) => <NoteFormView {...props} editForm={true} />}
      />
    </Content>
  );
};

export default Routes;

const Content = styled.div`
  width: 80%;
  margin-left: 20%;
  padding: 50px 3%;
`;
