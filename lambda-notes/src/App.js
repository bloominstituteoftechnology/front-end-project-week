import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
import ListView from './components/ListView';
import Note from './components/FullView';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';
import LeftNav from './components/LeftNav';

const Routes = () => (
  <Switch>
    <Route exact path='/list' component={ListView}/>
    <Route path='/list/:id' component={Note}/>
  </Switch>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ListView}/>
      <Route path='/list' component={Routes}/>
      <Route path='/newnote' component={NewNote}/>
      <Route path='/editnote' component={EditNote}/>
    </Switch>
  </main>
)

const App = () => (
  <div className="main">
    <div className="left">
      <LeftNav />
    </div><div className="right">
      <Main />
    </div>
  </div>
)

export default App;