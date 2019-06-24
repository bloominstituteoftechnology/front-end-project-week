import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import rootReducer from './reducers/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom' ;
import notesReducer from './reducers/reducers';
import './index.css';
import App from './App';

//const middleware = routerMiddleware(browserHistory);
const store = createStore(notesReducer, );

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
