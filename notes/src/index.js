// importing libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';


// importing reducers
import reducers from './store/reducers';

// importing components
import App from './App';

// use local storage for data persistance
// const persistedData = JSON.parse(window.localStorage.getItem('redux-notes')) || [];

// Redux Store
// TODO: change first input to reducers
const store = createStore(
  reducers, 
  applyMiddleware(thunk, logger)
);

// subscribe local storage to get updated data
// store.subscribe(() => {
//   localStorage.setItem('redux-notes', JSON.stringify(store.getState()));
// })

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root')
);