import React from 'react';
import ReactDOM from 'react-dom';


import rootReducer from './reducers';

// Auxillary Packages
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './App';

// CSS
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();