import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import CreateNewNote from '../CreateNewNote/CreateNewNote.js';
import ListView from '../ViewNote/ViewNote.js';
import NoteView from '../NoteView/NoteView.js';
import EditNote from '../EditNote/EditNote.js';

export default class Content extends Component {
    render() {
  return (
      <div>
          <Route path='/' component={Nav} />
          <div className='content'>
            <Route exact path='/create-new-note' component={CreateNewNote} />
            <Route exact path='/' component={ListView} />
            <Route exact path='/notes/:id' component={NoteView} />
            <Route exact path='/notes/edit/:id' component={EditNote} />
          </div>
       </div>
     

  );
}
}