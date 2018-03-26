import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import notes from './reducers';
import 'babel-polyfill';
import Root from './Components/Root';


const store = createStore(notes);


ReactDOM.render(
<Root store={store} />
, document.getElementById('root'));
registerServiceWorker();
