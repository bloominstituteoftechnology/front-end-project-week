import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import notesReducer from './reducers/notesReducer';

const store =  createStore(notesReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = {store}>
    <Router>
    <App />
    </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
