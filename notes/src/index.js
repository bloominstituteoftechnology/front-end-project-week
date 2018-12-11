import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { render } from 'react-dom'
// import Root from './components/Root'

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//  document.getElementById('root'));

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
)

render(<Root store={store} />, document.getElementById('root'))