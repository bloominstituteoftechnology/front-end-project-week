import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import CreateNoteForm from './components/CreateNoteForm';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote'

ReactDOM.render(
<Router>
    <div>    
        <Route exact path='/' component={ App } />
        <Route path='/create-note' component={ CreateNoteForm } />
        <Route path='/note-view' component={ NoteView } />
        <Route path='/edit-note' component={ EditNote } />
    </div>    
</Router>
, document.getElementById('root'));

