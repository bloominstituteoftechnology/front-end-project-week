import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import './index.css';
import App from './App';
import NoteViewPage from './components/NoteViewPage';
import NoteCreatePage from './components/NoteCreatePage';
import NoteEditPage from './components/NoteEditPage';

let store = createStore(reducers);

render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route exact path="/create" component={ NoteCreatePage } />
      <Route path="/notes/0" component={ NoteViewPage } />
      <Route path="/edit/:number" component={ NoteEditPage } />
    </div>
  </Router>
  </Provider>
  , document.getElementById('root'));
