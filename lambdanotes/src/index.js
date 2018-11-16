import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import NoteReducer from './reducers/noteReducer'

const middleware = applyMiddleware(thunk)
const store = createStore(NoteReducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider>,
document.getElementById('root'));

