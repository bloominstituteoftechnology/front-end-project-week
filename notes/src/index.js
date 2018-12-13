import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './store/reducers';
//import './index.css';
import App from './App';

//setup for Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk /*logger*/)),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
