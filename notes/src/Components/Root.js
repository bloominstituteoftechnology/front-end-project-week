import React from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import Create from './Create/Create.js';
import View from './View/View.js';
import Edit from './Edit/Edit.js';
import Note from './Note/Note.js';

const Root= ({store})=> (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={View}/>
          <Route path="/create" component={Create}/>
          <Route path="/edit/:id" component={Edit}/>
          <Route path="/notes/:id" component={Note}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)

Root.propTypes={
  store:PropTypes.object.isRequired
}

export default Root;
