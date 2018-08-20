import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import NotesList from './NotesList';
import NotePage from './NotePage';

class NotesContainer extends Component {
  render() {
    return (
      <div className='notes-container'>
        <Sidebar />
        <Route exact path="/" component={NotesList} />
        <Route path="/notes/:id" component={NotePage} />
        {/* <Route path="/create-new-note" component={Note} /> */}
        {/* <Route path="/edit-note" component={Note} /> */}
      </div>
    );
  }
}

export default NotesContainer;
