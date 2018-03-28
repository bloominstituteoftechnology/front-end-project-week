import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Notesdisplay from './components/Notedisplay';
import Sidebar from './components/Sidebar';
import Noteview from './components/Noteview';
import Createnote from './components/Createnote';
import Editnote from './components/Editnote';

class App extends Component {
  render() {
    return (
      <div className= 'App'>
        <Sidebar/>
        <Route exact path='/' component= { Notesdisplay }/>
        <Route path='/noteview' component= { Noteview }/>
        <Route path='/createnote' component= { Createnote }/>
        <Route path='/editnote' component= { Editnote }/>
      </div>
    );
  }
}

export default App;
