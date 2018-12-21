import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SideBar from './components/Sidebar/SideBarContainer'
import NoteList from './components/Notes/NoteList';
import CreatorForm from './components/Creator/CreatorForm';
import Note from './components/Notes/Note';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      noteList: []
    };
  }
  
  render() {
    return (
      <div>
        <SideBar />
        <Route exact path="/" component={NoteList} />
        <Route path='/creator-form' component={CreatorForm} />
        <Route path='/view/:id' component={Note} />
      </div>
    );
  }
}