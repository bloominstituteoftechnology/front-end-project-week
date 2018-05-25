import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Routers } from 'react-router-dom';
// import { Providers } from 'react-redux';
// import { createStrore } from 'redux';
// import { thunk } from 'react-thunk';
// import { logger } from 'react-logger';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
        <Routers>
            <App />
        </Routers>
, document.getElementById('root'));
registerServiceWorker();
