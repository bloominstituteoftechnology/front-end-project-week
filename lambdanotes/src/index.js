import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="MainApp">
    <App />
  </div>
, document.getElementById('root'));
registerServiceWorker();
