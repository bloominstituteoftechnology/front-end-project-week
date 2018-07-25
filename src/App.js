import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateNote from './Components/CreateNote';
import ListView from './Components/ListView';
import NoteView from './Components/NoteView';
import EditView from './Components/EditView';


class App extends Component {

  render() {
    return (
      <div className='app'>
        <Route exact path='/' component={ ListView } />
        <Route path='/notes/create' component={ CreateNote } />
        <Route exact path='/notes/:id' component={ NoteView } />
        <Route path='/notes/:id/edit' component={ EditView } />
      </div>
    );
  }
}

export default App;
