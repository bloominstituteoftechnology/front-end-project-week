import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './RootReducer/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';

const store = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
