import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

const store = createStore(Reducers);

render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
