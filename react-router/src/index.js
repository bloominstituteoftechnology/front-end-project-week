import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
			<BrowserRouter>
			<App />
			</BrowserRouter>
			),	document.getElementById('root'));
registerServiceWorker();
