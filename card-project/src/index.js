import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
// const store = createStore(smurfsReducer, applyMiddleware(thunk,logger));
import {notesReducer} from './reducers/reducers';
const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(notesReducer, applyMiddleware(logger) );

ReactDOM.render(
	
		<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
			</Router>
		</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();
