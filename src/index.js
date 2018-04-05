import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Authenticator from './components/Authenticator/Authenticator';

ReactDOM.render(
  <Router>
    <Authenticator />
  </Router>,

  document.getElementById('root')
);
registerServiceWorker();
