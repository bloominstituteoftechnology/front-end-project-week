import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import notes from './reducers';
import 'babel-polyfill';
import Root from './Components/Root';

const store = createStore(notes);


ReactDOM.render(
<Root store={store} />
, document.getElementById('root'));
registerServiceWorker();
