import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  { noteReducer } from './reducers/index';

//Router
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
    noteReducer, // this is the most basic reducer. A function that returns and object. Replace it.
    applyMiddleware(thunk, logger)
  );

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
