import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import './index.css';
import App from './App';
import rootReducer from './Reducer';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('root'));
registerServiceWorker();
