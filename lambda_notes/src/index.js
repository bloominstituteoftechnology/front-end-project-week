import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Note from './components/Note/Note';
import EditNote from './components/EditNote/EditNote';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';

const store = createStore(rootReducers);

ReactDOM.render(
<Provider store={store}>
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/:id" component={Note} exact />
      <Route path="/create" component={CreateNewNote} exact />
      <Route path="/edit" component={EditNote} exact />
    </Switch>
  </Router>
</Provider>
, document.getElementById('root'));