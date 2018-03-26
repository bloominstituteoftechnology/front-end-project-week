import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import Create from './Create/Create.js';
import View from './View/View.js';

const Root= ({store})=> (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={View}/>
        <Route path="/create" component={Create}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes={
  store:PropTypes.object.isRequired
}

export default Root;
