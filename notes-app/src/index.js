// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
// Components Imports
import './index.css';
import App from './App';
//Router Imports
import {BrowserRouter as Router} from 'react-router-dom';

//Redux Imports
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import notesReducer from './reducers';
// const store = createStore(notesReducer);

ReactDOM.render(
    
    // <Provider store={store}>
        <Router>
            <App />
        </Router>
    // </ Provider>
, document.getElementById('root'));

