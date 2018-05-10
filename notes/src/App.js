import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Note from './Components/Note';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Route exact path='/' component={Main} />
        <Route path='/create' component={Create} />
        <Route path='/note/:id' component={Note} />
        <Route path="/edit" component={Edit} />
      </div>
    );
  }
}
