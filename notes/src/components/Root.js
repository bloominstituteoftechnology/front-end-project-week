import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App.js';
import EditNote from './EditNote.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/notes/:id' render={props => <EditNote {...props}/>} />
      </Switch>
    </Router>
  </Provider>
)

export default Root