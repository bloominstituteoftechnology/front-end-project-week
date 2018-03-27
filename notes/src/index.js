import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';

import './index.css';
import App from './App';
import NoteViewPage from './components/NoteViewPage';
import NoteCreatePage from './components/NoteCreatePage';
import NoteEditPage from './components/NoteEditPage';

render(
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/notes/0" component={ NoteViewPage } />
      <Route path="/create" component={ NoteCreatePage } />
      <Route path="/edit/0" component={ NoteEditPage } />
    </div>
  </Router>, document.getElementById('root'));
