import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,

  } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import CreateNoteForm from './components/CreateNoteForm';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote'


const store = createStore(reducers)

ReactDOM.render(
 <Provider store={store}>   
    <Router>
        <div>    
            <Route exact path='/' component={ App } />
            <Route path='/create-note' component={ CreateNoteForm } />
            <Route path='/note-view/:id' component={ NoteView } />
            <Route path='/edit-note/:id' component={ EditNote } />
        </div>    
    </Router>
</Provider>
, document.getElementById('root'));

