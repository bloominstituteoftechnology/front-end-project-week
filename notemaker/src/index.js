import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const store= createStore(applyMiddleware);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));