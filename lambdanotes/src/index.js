import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { noteReducer } from './reducer/noteReducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddNotesContainer from './AddNotesContainer';
import OneNoteEditContainer from './OneNoteEditContainer';
import NoteContainer from './NoteContainer';

const store = createStore(noteReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/add-note" component={AddNotesContainer} />
        <Route
          exact
          path="/note/:id"
          render={props => <NoteContainer {...props} />}
        />
        <Route
          path="/note/:id/edit"
          render={props => <OneNoteEditContainer {...props} />}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
