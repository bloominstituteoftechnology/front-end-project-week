import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
apiKey: "AIzaSyAU7uLB6CSNGNh4AknNGXv6xmrI6_uOB-M",
authDomain: "notes-f8af8.firebaseapp.com",
databaseURL: "https://notes-f8af8.firebaseio.com",
projectId: "notes-f8af8",
storageBucket: "notes-f8af8.appspot.com",
messagingSenderId: "820090967930"
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
