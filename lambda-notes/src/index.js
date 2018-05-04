import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { noteReducer } from './reducers'
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.css';
import thunk from 'redux-thunk';

const store = createStore(noteReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
  