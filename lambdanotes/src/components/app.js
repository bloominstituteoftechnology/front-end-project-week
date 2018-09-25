import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Styled from 'styled-components';

import { Nav } from './Nav/';
import { NotesListContainer } from '../containers/';
import { NoteEditorContainer } from '../containers/';
import { NoteContainer } from '../containers/';

const DivBorder = Styled.div`
  margin: 10px;
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <DivBorder>
        <Nav />
        <Route exact path='/' component={NotesListContainer} />
        <Route path='/noteeditor' component={NoteEditorContainer} />
        <Route path='/notes/:id' component={NoteContainer} />
      </DivBorder>
    );
  }
}

export default withRouter(App);
