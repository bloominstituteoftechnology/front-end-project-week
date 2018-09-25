import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Styled from 'styled-components';

import { Nav } from './Nav/';
import { NotesList } from './NotesList/';
import { NoteEditor } from './NoteEditor/';
import { Note } from './Note/';

const DivBorder = Styled.div`
  margin: 10px;
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <DivBorder>
        <Nav />
        <Route exact path='/' component={NotesList} />
        <Route path='/noteeditor' component={NoteEditor} />
        <Route path='/notes/:id' component={Note} />
      </DivBorder>
    );
  }
}

export default withRouter(App);
