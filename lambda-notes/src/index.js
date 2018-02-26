import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import NoteList from './components/NoteList';
import Note from './components/Note';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={NoteList} exact/>
      <Route path="/note" component={Note}/> 
    </div>
  </Router>,
  document.getElementById('root')
);