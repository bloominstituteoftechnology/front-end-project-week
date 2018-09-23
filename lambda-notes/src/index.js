// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Dependencies
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';

// Styles
import './css/index.css';

ReactDOM.render(
	<Router>
		<App />
	</Router>, 
	document.getElementById('root')
);

registerServiceWorker();
