
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css'
import App from '../src/components/App'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        
            <App />
    
    </Provider>
, document.getElementById('root'));
