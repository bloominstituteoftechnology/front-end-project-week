import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConditionalRender from './components/LoginComponents/ConditionalRender';
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(<Router><ConditionalRender /></Router>, document.getElementById('root'));


