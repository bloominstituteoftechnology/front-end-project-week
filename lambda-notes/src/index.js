import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';

// redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducerrs';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
