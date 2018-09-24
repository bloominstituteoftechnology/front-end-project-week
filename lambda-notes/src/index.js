// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Dependencies
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';

// Reducers
import { NotesReducer } from './store/reducers';

// MiddleWare
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Styles
import './css/index.css';

const store = createStore(NotesReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store = { store }>
		<Router>
			{/* <App /> */}
			<Route path = '/' component = { App } />
		</Router>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
