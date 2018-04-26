import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'gridstack/dist/gridstack.min.css';
import 'jquery/dist/jquery.min.js'
import 'gridstack/dist/gridstack.jQueryUI.min.js';
import 'gridstack/dist/gridstack.min.js';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
