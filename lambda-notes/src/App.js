import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SideBar from './components/Sidebar/SideBarContainer'
import NoteList from './components/Notes/NoteList';

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
      </div>
    );
  }
}