import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListItems from './ListItems'
import CreateNewNote from './CreateNewNote'
import SingleNoteView from './SingleNoteView'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

ReactDOM.render(
<Router>
    <div>
    <Route exact path="/" component={ListItems} />
    <Route path="/create" component={CreateNewNote} />
    <Route path="single_note" component={SingleNoteView} />
    <App />
    
    </div>
    </Router>,
     document.getElementById('root'));

