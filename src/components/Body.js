import React, { Component } from 'react';
import NotesList from './BodyComponents/NotesList';
import NewNote from './BodyComponents/NewNote';
import NoteView from './BodyComponents/NoteView';
import EditNote from './BodyComponents/EditNote';

import { Route } from 'react-router-dom';

export default class Body extends Component {
  render() {
    return (
      <div style={{ overflow: 'auto', height: '100vh' }}>
        <Route path="/notelist" component={NotesList} />
        <Route path="/newnote" component={NewNote} />
        <Route path="/noteview/:id" component={NoteView} />
        <Route path="/editnote/:id" component={EditNote} />
      </div>
    );
  }
}
