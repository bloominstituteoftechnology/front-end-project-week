import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {notesReducer} from './reducers/reducers';
const store = createStore(notesReducer);

ReactDOM.render(
	
		<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
			</Router>
		</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();
