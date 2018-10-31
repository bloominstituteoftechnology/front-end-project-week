import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import rootReducer from './components/reducers';
import './index.css';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
