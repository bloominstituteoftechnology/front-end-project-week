import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App.js';
import AddNote from './AddNote.js';
import EditNote from './EditNote.js';
import Navbar from './Navbar.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <div className="content">
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/newnote' component={AddNote} />
          <Route path='/notes/:id' render={props => <EditNote {...props}/>} />
        </Switch>
        </div>
      </div>
    </Router>
  </Provider>
)

export default Root