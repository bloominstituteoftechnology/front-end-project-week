import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Router>
            <App />
        </Router>
    </div>,
document.getElementById('root'));
registerServiceWorker();
