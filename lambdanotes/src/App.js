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
    <Route path="/noteview" component={NoteView} />
    <Route path="/createnewview" component={CreateNewView} />
    <Route path="/editview" component={EditView} />
    <Route path="/deletemodal" component={DeleteModal} />
  </div>
);

export default App;
