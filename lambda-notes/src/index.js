import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Route path="/"
    component={App}/>     
    </Router>
  </Provider>,
  document.getElementById('root')
);