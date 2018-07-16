import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
<Router>
    <Root />
    </Router>, document.getElementById('root'));

