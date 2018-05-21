import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateNote from './Components/CreateNote';
import { Route } from 'react-router-dom';
import ListView from './Components/ListView';
import NoteView from './Components/NoteView';
import EditView from './Components/EditView';


class App extends Component {

  render() {
    return (
      <div className='app'>
        <Route exact path='/' component={ListView} />
        <Route path='/create' component={CreateNote} />
        <Route path='/view/:id' component={NoteView} />
        <Route path='/edit/:id' component={EditView} />
      </div> 
    );
  }
}

export default App;
