import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

var config = {
    apiKey: "AIzaSyDAReV6uAhiDSiMVOe69EgJTy-1AG4NsOA",
    authDomain: "lambda-notes-b2b43.firebaseapp.com",
    databaseURL: "https://lambda-notes-b2b43.firebaseio.com",
    projectId: "lambda-notes-b2b43",
    storageBucket: "lambda-notes-b2b43.appspot.com",
    messagingSenderId: "337557344869"
};

firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
