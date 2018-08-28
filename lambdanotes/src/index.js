import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Notes from "./components/Notes";

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'),);
