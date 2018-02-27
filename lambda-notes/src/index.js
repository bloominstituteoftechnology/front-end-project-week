import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './index.css';
import NoteList from './components/NoteList';
import Note from './components/Note';
import App from './App';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);