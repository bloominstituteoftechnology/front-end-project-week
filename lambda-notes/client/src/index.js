import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Provider>
            <App />
        </Provider>
    </Router>,
document.getElementById('root'));
registerServiceWorker();
