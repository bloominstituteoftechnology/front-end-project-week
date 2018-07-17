import React, { Component } from 'react'
import './index.css';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import { Route, Switch } from 'react-router-dom';

export default class MainContent extends Component {
  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route path='/' exact component={NotesList} />
          <Route path='/note/:id' exact component={NoteView} />
          <Route path='/create-note' exact component={CreateNote} />
          <Route path='/edit-note/:id' exact component={EditNote} />
        </Switch>
      </div>
    )
  }
}
