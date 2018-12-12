import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path={'/'} component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
