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
import { LoginView } from './views';
import { Auth } from './components';

// Reducers
import { NotesReducer } from './store/reducers';

// MiddleWare
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Styles
import './css/index.css';

const store = createStore(NotesReducer, applyMiddleware(thunk, logger));
const AuthComp = Auth(App)(LoginView);

ReactDOM.render(
	<Provider store = { store }>
		<Router>
			<Route path = '/' component = { AuthComp } />
		</Router>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
