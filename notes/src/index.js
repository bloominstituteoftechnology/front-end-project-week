import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';

import './index.css';
import App from './App';
import NoteViewPage from './components/NoteViewPage';

render(
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/notes/0" component={ NoteViewPage } />
    </div>
  </Router>, document.getElementById('root'));
