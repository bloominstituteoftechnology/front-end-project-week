import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';






ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
