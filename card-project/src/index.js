import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {notesReducer} from './reducers/reducers';
const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	
		<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
			</Router>
		</Provider>,
	document.getElementById('root')
);
