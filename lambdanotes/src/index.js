import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Home from './components/Home'

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import NoteReducer from './reducers/noteReducer'

//experimenting with separate store
// import getAppStore from './store/store' 
// const store = getAppStore();


const middleware = applyMiddleware(thunk)
const store = createStore(NoteReducer, middleware)



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Home /> 
        </Router>
    </Provider>,
document.getElementById('root'));

