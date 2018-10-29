import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Navigation,
  ListView,
  NoteView,
  CreateNewView,
  EditView,
  DeleteModal
} from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Navigation />
    <Route exact path="/" component={ListView} />
    <Route exact path="/noteview" component={NoteView} />
    <Route exact path="/createnewview" component={CreateNewView} />
    <Route exact path="/editview" component={EditView} />
    <Route exact path="/deletemodal" component={DeleteModal} />
  </div>
);

export default App;
